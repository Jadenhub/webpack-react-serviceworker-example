import renderer from 'react-test-renderer';
import RatesTable from '../../components/rates/RatesTable';
import React from 'react';
import { RATES } from '../mockData/data';
import { I18N } from '../mockData/i18n';
import { getTableData } from '../../components/hooks/useRateData';

test('renders correctly', () => {
  const data = getTableData(RATES)
  const tree = renderer
    .create(<RatesTable data={data} i18n={I18N}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('without data', () => {
  const data = getTableData(RATES)
  const tree = renderer
    .create(<RatesTable i18n={I18N}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});