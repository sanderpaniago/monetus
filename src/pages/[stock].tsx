import { ChartStockQuery, GetListStockQuery } from '@generated/graphql'
import type { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

import Layout from 'src/components/Layout'
import News from 'src/components/News'
import { SearchStock } from 'src/components/SearchStock'
import { TitlePage } from 'src/components/TitlePage'
import { getChartStock } from 'src/hooks/useChartStock'
import { getListStock, useListStock } from 'src/hooks/useListStock'

const Graphic = dynamic(() => import('src/components/Graphic'), { ssr: false })
const Bloomberg = dynamic(() => import('src/components/Bloomberg'))

type Props = {
  stock?: string
  stocksList: GetListStockQuery['getListStock']
  chartData: ChartStockQuery['chartStock']
}

const Stock = ({ stock, stocksList, chartData }: Props) => {
  const { data } = useListStock(stocksList)

  return (
    <>
      <Head>
        <title>Monetus | {stock}</title>
      </Head>

      <TitlePage
        title="Dashboard"
        icon="/icons/dashboard.svg"
        iconLabel="dashboard icon four square"
      />

      <SearchStock />

      <Graphic
        initialData={chartData}
        stock={stock ?? data?.[0].symbol ?? ''}
      />

      <Bloomberg stocks={data} />
      <News symbol={data?.[0].symbol ?? ''} />
    </>
  )
}

export default Stock

Stock.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const stocksList = await getListStock()
  const symbol = query.stock as string
  const chartData = await getChartStock(symbol)

  return {
    props: {
      stock: query.stock,
      stocksList,
      chartData
    }
  }
}
