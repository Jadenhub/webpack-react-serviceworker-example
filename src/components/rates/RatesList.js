import styled from 'styled-components';
import React  from 'react'
import { withI18n } from '../decorator/i18n';
import RatesTable from './RatesTable';
import TablePagination from './TablePagination';
import { withRatesData } from '../decorator/withRatesData';
import MobileRatesTable from './mobile/RatesTable';


const TitleWrapper = styled.div`
  font-size: 25px;
`

function RatesList({
  i18n, data, isMobile
}){
  return (
    <div>
      <TitleWrapper>
        {i18n['RATES']}
      </TitleWrapper>
      {isMobile? <MobileRatesTable data={data} />: 
        <RatesTable 
          data={data} 
          renderPagination={(props)=> <TablePagination {...props} />}
        />
      }
    </div>
  )
}

export default withI18n(withRatesData(RatesList))