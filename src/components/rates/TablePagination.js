import { withI18n } from "../decorator/i18n";
import React from 'react';

function TablePagination({
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  i18n,
  pageIndex,
  pageSize,
  setPageSize,
  pageCount
}){
  return (
    <div>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        {i18n['PAGE']}{' '}
        <strong>
          {pageIndex + 1} {i18n['OF']} {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | {i18n['GO_TO_PAGE']}:{' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            {i18n['SHOW']} {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}


export default withI18n(TablePagination)