import styled from 'styled-components';
import React, { useMemo } from 'react'
import { withI18n } from '../decorator/i18n';
import { useTable, usePagination, useRowSelect } from 'react-table'

const PaginationWrapper = styled.div`
  margin-top: 20px;
`
const TableWrapper = styled.table`
  border-spacing: 0;
  border: 1px solid black;
  margin-bottom: 20px;
  width: 100%;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    :last-child {
      border-right: 0;
    }
  }

  td:first-child{
    text-align: center;
  }
`
function RatesTable({ 
  i18n,
  data = [],
  renderPagination = ()=>{}
}) {
  const columns = useMemo(
    () => [
      {
        Header: i18n['NAME'],
        accessor: 'name',
      },
      {
        Header: i18n['TYPE'],
        accessor: 'type',
      },
      {
        Header: i18n['UNIT'],
        accessor: 'unit',
      },
      {
        Header: i18n['VALUE'],
        accessor: 'value',
      },
    ],
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => {
            const { checked, onChange } = getToggleAllRowsSelectedProps();
            return (
              <div>
              <input type="checkbox" checked={checked} onChange={onChange}/>
            </div>
            )
          },
          Cell: ({ row }) => {
            const { checked, onChange } = row.getToggleRowSelectedProps();
            return (
              <div>
                <input type="checkbox" checked={checked} onChange={onChange} />
              </div>
            )
          },
        },
        ...columns,
      ])
    }
  )
  return (
    <>
      <PaginationWrapper>
        {renderPagination({
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
        })}
      </PaginationWrapper>
      <TableWrapper {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </TableWrapper>
    </>
  )
}

export default withI18n(RatesTable)