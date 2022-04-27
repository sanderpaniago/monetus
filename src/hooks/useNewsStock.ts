import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import { GetNewStockQuery, GetNewStockQueryVariables } from '@generated/graphql'

import { baseUrl } from '../../config'

export const query = gql`
  query GetNewStock($symbol: String!) {
    news(symbol: $symbol) {
      datetime
      headline
      image
      summary
    }
  }
`

export async function getNewsStockStock(symbol: string) {
  const { news } = await request<GetNewStockQuery, GetNewStockQueryVariables>(
    `${baseUrl}/api/graphql`,
    query,
    { symbol }
  )

  return news?.map(item => ({
    ...item,
    datetime: new Intl.DateTimeFormat('pt-BR').format(new Date(item.datetime))
  }))
}

export function useNewsStock(symbol: string) {
  return useQuery('news', () => getNewsStockStock(symbol), {
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })
}
