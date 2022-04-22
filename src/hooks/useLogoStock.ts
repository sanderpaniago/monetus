import { useQuery } from 'react-query'
import { api } from '../services/api'

type GetLogoResponse = {
  url: string
}

export async function getLogoStock(symbol: string): Promise<GetLogoResponse> {
  const { data } = await api.get(`/stock/${symbol}/logo`)

  return data
}

export function useLogoStock(symbol: string) {
  return useQuery(['logo', symbol], () => getLogoStock(symbol))
}
