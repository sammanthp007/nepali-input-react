# React-Nepali-Input / TextArea

Conversion functions, mappings, input and textarea components for nepali unicode romanized typing.

## Installation

Install via npm or yarn

```bash
  npm install nepali-input-react
```

## Usage/Examples

#### Basic input & textarea

```javascript
import * as React from 'react';
import { NepaliInput, NepaliTextArea } from 'nepali-input-react';

export default function App() {
  const [text, setText] = React.useState('');

  return (
    <div>
      <NepaliInput value={text} onChange={e => setText(e.target.value)} />
      <NepaliTextArea value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}
```

#### Usage with material ui

```javascript
import * as React from 'react';
import { NepaliInput } from 'nepali-input-react';
import { Box, TextField } from '@mui/material';

export default function App() {
  const [text, setText] = React.useState('');

  return (
    <Box sx={{ p: 8 }}>
      <TextField
        label="Type in nepali"
        value={text}
        onChange={e => setText(e.target.value)}
        name="nepali-textfield"
        id="nepali-textfield-input"
        InputProps={{
          inputComponent: NepaliInput,
        }}
        variant="outlined"
      />
    </Box>
  );
}
```

## API Reference

#### english to nepali conversion function

```javascript
import { getNepaliFromEnglish } from 'nepali-input-react';

getNepaliFromEnglish('mero nam HmoG ho.'); //मेरो नाम अमोघ हो।
```

#### nepali to english conversion function

```javascript
import { getEnglishFromNepali } from 'nepali-input-react';

getEnglishFromNepali('मेरो नाम अमोघ हो।'); //mero nam HmoG ho.
```

#### mappings

```javascript
import { mappings } from 'nepali-input-react';

mappings['a'];
```

#### input component

```javascript
import { NepaliInput } from 'nepali-input-react';

export default function App() {
  return <NepaliInput />; // any props that <input /> accepts is a valid prop
}
```

#### textarea component

```javascript
import { NepaliTextArea } from 'nepali-input-react';

export default function App() {
  return <NepaliTextArea />; // any props that <textarea /> accepts is a valid prop
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
