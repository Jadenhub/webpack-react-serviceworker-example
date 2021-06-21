import { API_PATH } from '../constants/env';
import { API_HOST } from '../constants/serverEev';
import clientfetch from '../helpers/clientfetch';

test('clientfetch data test', async () => {
  const {data, status} = await clientfetch(
    `${API_HOST}${API_PATH}/exchange_rates`,
  {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'GET',
  })

  expect(status).toBe(200);
  expect(data).not.toBe(undefined);
});

test('clientfetch wrong path test', async () => {
  const {data } = await clientfetch(
    `${API_HOST}${API_PATH}/exchange_rates/wrong-path`,
  {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'GET',
  })
  expect(data).toBe(undefined);
});