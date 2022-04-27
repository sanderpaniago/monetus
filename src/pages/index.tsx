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

const Home = ({ stocksList, chartData }: Props) => {
  const { data } = useListStock(stocksList)

  return (
    <>
      <Head>
        <title>Monetus | Dashboard</title>
      </Head>

      <TitlePage
        title="Dashboard"
        icon="/icons/dashboard.svg"
        iconLabel="dashboard icon four square"
      />

      <SearchStock />

      <Graphic initialData={chartData} stock={data?.[0].symbol ?? ''} />

      <Bloomberg stocks={data} />
      <News symbol={data?.[0].symbol ?? ''} />
    </>
  )
}

export default Home

Home.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>

export const getServerSideProps: GetServerSideProps = async () => {
  const stocksList = await getListStock()
  const chartData = await getChartStock(stocksList[0].symbol)

  return {
    props: {
      stocksList,
      chartData
    }
  }
}
