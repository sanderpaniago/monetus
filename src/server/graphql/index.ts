import { print } from 'graphql'

import Query from './query.graphql'
import Stock from './stock.graphql'
import Chart from './chart.graphql'
import News from './news.graphql'

export const typeDefs = [Query, Stock, Chart, News].map(print).join('\n')
