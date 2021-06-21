import renderer from 'react-test-renderer';
import TablePagination from '../../components/rates/TablePagination';
import React from 'react';
import { I18N } from '../mockData/i18n';

test('renders correctly', () => {
  const tree = renderer
    .create(<TablePagination 
      gotoPage={jest.fn()}
      previousPage={jest.fn()}
      nextPage={jest.fn()}
      canPreviousPage={true}
      canNextPage={true}
      pageOptions={{
        length: 10
      }}
      i18n={I18N}
      pageIndex={0}
      pageSize={10}
      setPageSize={jest.fn()}
      pageCount={10}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});