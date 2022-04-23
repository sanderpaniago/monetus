import { Box } from '@chakra-ui/react'
import { ChartStockQuery, GetListStockQuery } from '@generated/graphql'
import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Container } from 'src/components/Container'
import { SearchStock } from 'src/components/SearchStock'
import { TitlePage } from 'src/components/TitlePage'
import { getChartStock } from 'src/hooks/useChartStock'
import { getListStock, useListStock } from 'src/hooks/useListStock'

const Sidebar = dynamic(() => import('src/components/Sidebar'))
const Graphic = dynamic(() => import('src/components/Graphic'), { ssr: false })
const SideOver = dynamic(() => import('src/components/SideOver'))
const Bloomberg = dynamic(() => import('src/components/Bloomberg'))

type Props = {
  stock?: string
  stocksList: GetListStockQuery['getListStock']
  chartData: ChartStockQuery['chartStock']
}

const Home = ({ stock, stocksList, chartData }: Props) => {
  const { data } = useListStock(stocksList)

  return (
    <Box w="100vw" height="100vh" d="flex">
      <Head>
        <title>Monetus | Dashboard</title>
      </Head>
      <Sidebar />

      <Container d="flex" flex={1}>
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
      </Container>

      <SideOver />
    </Box>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const stocksList = await getListStock()
  const symbol = query.stock as string
  const chartData = await getChartStock(symbol ?? stocksList[0].symbol)

  return {
    props: {
      stock: query?.stock ?? null,
      stocksList,
      chartData
    }
  }
}
