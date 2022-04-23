import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import {
  GetListStockQuery,
  GetListStockQueryVariables
} from '@generated/graphql'

export const query = gql`
  query GetListStock {
    getListStock {
      changePercent
      companyName
      symbol
      latestPrice
    }
  }
`

export async function getListStock() {
  const { getListStock } = await request<
    GetListStockQuery,
    GetListStockQueryVariables
  >('/api/graphql', query)

  return getListStock
}

export function useListStock() {
  return useQuery('stocks', () => getListStock(), {
    staleTime: 1000 * 60 * 1 // 1 minute
  })
}
