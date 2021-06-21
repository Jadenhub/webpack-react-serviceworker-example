import { RATES } from "../../__test__/mockData/data";

const pathDataMap = {
  '/api/v3/exchange_rates': RATES
}

export default function clientfetch(...args) {
  return new Promise((resolve) => {
    process.nextTick(() => {
      return resolve({data: pathDataMap[args[0]]})
    })
  });
}