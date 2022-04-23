import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import {
  GetStockBySymbolQuery,
  GetStockBySymbolQueryVariables
} from '@generated/graphql'

import { baseUrl } from '../../config'

export const query = gql`
  query GetStockBySymbol($symbol: String!) {
    getStockBySymbol(symbol: $symbol) {
      symbol
      companyName
      change
      changePercent
      latestPrice
    }
  }
`

export async function getStockBySymbol(symbol: string) {
  const { getStockBySymbol } = await request<
    GetStockBySymbolQuery,
    GetStockBySymbolQueryVariables
  >(`${baseUrl}/api/graphql`, query, { symbol })

  return getStockBySymbol
}

export function useStockBySymbol(symbol: string) {
  return useQuery(['company', symbol], () => getStockBySymbol(symbol))
}
