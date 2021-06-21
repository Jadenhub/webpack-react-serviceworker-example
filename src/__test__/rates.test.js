jest.mock('../helpers/clientfetch.js');

import { getRates } from '../services/rest/client';
import { RATES } from './mockData/data';

test('get rates', async () => {
  const { data } = await getRates();
  expect(data).toStrictEqual(RATES);
});