import { api } from 'src/services/api'

type Variables = {
  symbol: string
  date: string
}

export const chartStock = async (_: unknown, { symbol, date }: Variables) => {
  const { data } = await api.get(`/stock/${symbol}/chart/date/${date}`, {
    params: {
      chartInterval: 30
    }
  })

  return data.filter((item: any) => typeof item.close === 'number')
}
