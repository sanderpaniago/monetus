import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import {
  GetListStockQuery,
  GetListStockQueryVariables
} from '@generated/graphql'

import { baseUrl } from '../../config'

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
  >(`${baseUrl}/api/graphql`, query)

  return getListStock
}

export function useListStock(initialData?: GetListStockQuery['getListStock']) {
  return useQuery('stocks', getListStock, {
    staleTime: 1000 * 60 * 1, // 1 minute
    initialData
  })
}
