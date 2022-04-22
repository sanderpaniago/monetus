import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable',
  params: {
    token: process.env.NEXT_PUBLIC_IEX_TOKEN
  }
})
