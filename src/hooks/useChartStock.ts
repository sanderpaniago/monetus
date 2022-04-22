import { useQuery } from 'react-query'
import { api } from '../services/api'

type ChartStockItem = {
  date: string
  minute: string
  label: string
  close: number
  average: number
  marketClose: number
}

export async function getChartStock(symbol: string): Promise<ChartStockItem[]> {
  const date = new Date().toLocaleDateString().split('/').reverse().join('')

  const { data } = await api.get<ChartStockItem[]>(
    `/stock/${symbol}/chart/date/${date}`,
    {
      params: {
        chartInterval: 30
      }
    }
  )

  return data.filter(item => typeof item.close === 'number')
}

export function useChartStock(symbol: string) {
  return useQuery(['chart', symbol], () => getChartStock(symbol))
}
