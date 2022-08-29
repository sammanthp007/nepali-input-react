import { getNepaliFromEnglish } from '../src/transformer';

describe('transformer', () => {
  it('translates correctly from english to nepali', () => {
    const toTranslate = 'mero nam HmoG ho.';
    const translated = getNepaliFromEnglish(toTranslate);
    expect(translated).toEqual('मेरो नाम अमोघ हो।');
  });
});
