import renderer from 'react-test-renderer';
import RatesTable from '../../components/rates/mobile/RatesTable';
import React from 'react';
import { MockWindow } from '../mockData/window';
import { RATES } from '../mockData/data';
import { I18N } from '../mockData/i18n';
import { getTableData } from '../../components/hooks/useRateData';

test('renders correctly', () => {
  MockWindow();
  const data = getTableData(RATES)
  const tree = renderer
    .create(<RatesTable data={data} i18n={I18N}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});