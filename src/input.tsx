import * as React from 'react';
import { getNepaliFromEnglish } from './transformer';

interface NepaliInputProps {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  [k: string]: unknown;
}

type InputType = HTMLTextAreaElement | HTMLInputElement;

function internalChangeHandler<T extends InputType>(
  e: React.ChangeEvent<T>,
  ref: React.ForwardedRef<T>,
  internalRef: React.RefObject<T>,
  onChange: NepaliInputProps['onChange']
) {
  const nepaliTextFromEnglish = getNepaliFromEnglish(e.target.value);
  if (ref && typeof ref !== 'function') {
    if (ref.current) {
      ref.current.value = nepaliTextFromEnglish;
    }
  } else {
    if (internalRef.current) {
      internalRef.current.value = nepaliTextFromEnglish;
    }
  }
  if (onChange) {
    onChange({
      ...e,
      target: { ...e.target, value: nepaliTextFromEnglish },
    });
  }
}

export const NepaliInput = React.forwardRef<HTMLInputElement, NepaliInputProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, type = 'input', ...rest } = props;

    const internalRef = React.useRef<HTMLInputElement>(null);

    return (
      <input
        {...rest}
        ref={ref || internalRef}
        onChange={e =>
          internalChangeHandler<HTMLInputElement>(e, ref, internalRef, onChange)
        }
      />
    );
  }
);

export const NepaliTextArea = React.forwardRef<
  HTMLTextAreaElement,
  NepaliInputProps
>(function TextMaskCustom(props, ref) {
  const { onChange, ...rest } = props;

  const internalRef = React.useRef<HTMLTextAreaElement>(null);

  return (
    <textarea
      {...rest}
      ref={ref || internalRef}
      onChange={e =>
        internalChangeHandler<HTMLTextAreaElement>(
          e,
          ref,
          internalRef,
          onChange
        )
      }
    />
  );
});
