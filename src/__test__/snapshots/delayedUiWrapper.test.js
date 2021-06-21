import renderer from 'react-test-renderer';
import DelayedUiWrapper from '../../components/style/DelayedUiWrapper';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer
    .create(<DelayedUiWrapper/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer
    .create(<DelayedUiWrapper inline={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});