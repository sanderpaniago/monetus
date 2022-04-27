import { GraphQLError } from 'graphql'
import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const chartStock = async (_: unknown, { symbol }: Variables) => {
  try {
    const { data } = await api.get(`/stock/${symbol}/chart/dynamic`, {
      params: {
        chartInterval: 30
      }
    })

    console.log(data.data)

    if (data.range === '1m') {
      return data.data.map(({ date, close }: any) => ({
        date,
        close,
        label: new Date(date).toLocaleDateString()
      }))
    }

    return data.data.filter(({ close }: any) => close !== null)
  } catch (e) {
    return new GraphQLError('Error fetching chart data')
  }
}
