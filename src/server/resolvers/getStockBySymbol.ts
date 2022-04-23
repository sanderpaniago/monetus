import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const getStockBySymbol = async (_: unknown, { symbol }: Variables) => {
  const { data } = await api.get(`/stock/${symbol}/quote`)
  return data
}
