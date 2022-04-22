import { useQuery } from 'react-query'
import { api } from '../services/api'

type GetStockBySymbolResponse = {
  symbol: string
  companyName: string
  change: number
  changePercent: number
  latestPrice: number
}

export async function getStockBySymbol(
  symbol: string
): Promise<GetStockBySymbolResponse> {
  const { data } = await api.get(`/stock/${symbol}/quote`)

  return data
}

export function useStockBySymbol(symbol: string) {
  return useQuery(['company', symbol], () => getStockBySymbol(symbol))
}
