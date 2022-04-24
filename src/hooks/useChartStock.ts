import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import { ChartStockQuery, ChartStockQueryVariables } from '@generated/graphql'

import { baseUrl } from '../../config'

export const query = gql`
  query ChartStock($symbol: String!, $date: String!) {
    chartStock(symbol: $symbol, date: $date) {
      date
      close
    }
  }
`

export async function getChartStock(symbol: string) {
  const date = new Date().toLocaleDateString().split('/').reverse().join('')
  const { chartStock } = await request<
    ChartStockQuery,
    ChartStockQueryVariables
  >(`${baseUrl}/api/graphql`, query, { symbol, date: '20220421' })

  return chartStock
}

export function useChartStock(
  symbol: string,
  initialData: ChartStockQuery['chartStock']
) {
  return useQuery(['chart', symbol], () => getChartStock(symbol), {
    initialData,
    refetchInterval: 1000 * 60 * 60 * 24, // 1 day
    staleTime: 1000 * 60 * 60 * 24 // 1 day
  })
}
