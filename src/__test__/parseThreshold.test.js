import { parseThreshold } from '../components/hooks/helpers/parseThreshold';

const defaultThreshold = {
  unit: 'Percent',
  value: 0.8,
}

test('parse pure number', () => {
  expect(parseThreshold(1)).toStrictEqual({
    value: 100,
    unit: 'Percent'
  })
});

test('parse px', () => {
  expect(parseThreshold('100px')).toStrictEqual({
    value: 100,
    unit: 'Pixel'
  })
});

test('parse %', () => {
  expect(parseThreshold('100%')).toStrictEqual({
    value: 100,
    unit: 'Percent'
  })
});

test('error string', () => {
  expect(parseThreshold('ERROR STRING')).toStrictEqual(defaultThreshold)
});

test('Empty', () => {
  expect(parseThreshold()).toStrictEqual(defaultThreshold)
});