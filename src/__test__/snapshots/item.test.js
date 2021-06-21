import renderer from 'react-test-renderer';
import React from 'react';
import { getTranslation } from '../../helpers/i18n';
import { RATES } from '../mockData/data';
import Item from '../../components/rates/mobile/Item';

test('renders correctly', () => {
  const tree = renderer
    .create(<Item 
      rate={RATES.rates.btc} 
      i18n={getTranslation()}
      clicked={true}
      onClick={()=>{}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});