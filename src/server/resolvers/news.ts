import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const news = async (_: unknown, { symbol }: Variables) => {
  const { data } = await api.get(`/stock/${symbol}/news`)

  return data
}
