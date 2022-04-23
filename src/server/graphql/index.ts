import { print } from 'graphql'

import Query from './query.graphql'
import Stock from './stock.graphql'
import Chart from './chart.graphql'

export const typeDefs = [Query, Stock, Chart].map(print).join('\n')
