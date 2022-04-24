import { GraphQLError } from 'graphql'
import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const chartStock = async (_: unknown, { symbol }: Variables) => {
  try {
    const { data } = await api.get(`/stock/${symbol}/chart/dynamic`)
    return data.data
  } catch (e) {
    return new GraphQLError('Error fetching chart data')
  }
}
