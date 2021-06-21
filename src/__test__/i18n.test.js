import {  getTranslation } from '../helpers/i18n'
import { I18N } from './mockData/i18n';

test('get i18n', () => {
  expect(getTranslation()).toStrictEqual(I18N)
});