import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../../components/interact/Button';

test('renders correctly', () => {
  const tree = renderer
    .create(<Button 
        lineHeight={2}
        padding={'4px'}
        disabled={true}
        border={'solid 1px #797979'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});