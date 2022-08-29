import { mappings } from './mappings';

export class BiMap<T, K> {
  map: Map<T, K>;
  reverseMap: Map<K, T>;
  constructor(map: Map<T, K>) {
    this.map = map;
    this.reverseMap = new Map<K, T>();
    map.forEach((value, key) => {
      this.reverseMap.set(value, key);
    });
  }
  get(key: T) {
    return this.map.get(key);
  }
  rGet(key: K) {
    return this.reverseMap.get(key);
  }
}

const NepaliUnicodeMap = new BiMap<string, string>(
  new Map(Object.entries(mappings))
);

export function getNepaliFromEnglish(text: string): string {
  return text
    .split('')
    .reduce((acc, cur) => (acc += NepaliUnicodeMap.get(cur) || cur), '');
}

export function getEnglishFromNepali(text: string): string {
  return text
    .split('')
    .reduce((acc, cur) => (acc += NepaliUnicodeMap.rGet(cur) || cur), '');
}
