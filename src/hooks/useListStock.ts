import { useQuery } from 'react-query'
import { api } from '../services/api'

export type Stock = {
  changePercent: number
  change: number
  companyName: string
  currency: string
  primaryExchange: string
  symbol: string
  iexRealtimePrice: number
  latestPrice: number
}

export async function getListStock(): Promise<Stock[]> {
  const { data } = await api.get('/stock/market/list/mostactive')

  return data
}

export function useListStock() {
  return useQuery('stocks', () => getListStock(), {
    staleTime: 1000 * 60 * 1 // 1 minute
  })
}
