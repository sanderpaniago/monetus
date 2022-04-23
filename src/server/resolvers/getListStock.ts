import { api } from 'src/services/api'

export const getListStock = async () => {
  const { data } = await api.get('/stock/market/list/mostactive')
  return data
}
