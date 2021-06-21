import renderer from 'react-test-renderer';
import Custom404 from '../../pages/404';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer
    .create(<Custom404/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});