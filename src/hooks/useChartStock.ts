import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import { ChartStockQuery, ChartStockQueryVariables } from '@generated/graphql'

import { baseUrl } from '../../config'

export const query = gql`
  query ChartStock($symbol: String!, $date: String!) {
    chartStock(symbol: $symbol, date: $date) {
      date
      minute
      label
      close
      average
      marketClose
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
    initialData
  })
}
