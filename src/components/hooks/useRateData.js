import { useMemo } from "react";

export function getTableData(rates){
  return Object.keys(rates).map(key=>{
    return rates[key];
  })
}

export function useRateData(rates){
  return useMemo(() => getTableData(rates), [rates])
}