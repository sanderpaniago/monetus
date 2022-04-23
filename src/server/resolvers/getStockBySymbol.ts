import { GraphQLError } from 'graphql'
import { api } from 'src/services/api'

type Variables = {
  symbol: string
}

export const getStockBySymbol = async (_: unknown, { symbol }: Variables) => {
  try {
    const { data } = await api.get(`/stock/${symbol}/quote`)
    return data
  } catch {
    new GraphQLError('Stock not found')
  }
}
