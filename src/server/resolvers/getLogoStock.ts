import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const getLogoStock = async (_: unknown, { symbol }: Variables) => {
  const { data } = await api.get(`/stock/${symbol}/logo`)

  return data
}
