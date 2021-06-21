import React, { useEffect, useState } from 'react'
import { getRates } from '../../services/rest/client';
import {useRateData } from '../hooks/useRateData';

export function withRatesData(Component) {
  return (props) => {
    const [rates, setRates] = useState({});
    useEffect(async ()=>{
      const {data: {rates}} = await getRates() || {data:{rates:{}}};
      setRates(rates);
    }, [])
    const data = useRateData(rates)
    
    return (
      <Component
        data={data}
        {...props}
      />
    )
  }
}