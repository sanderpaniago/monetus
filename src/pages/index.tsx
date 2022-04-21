import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Bloomberg } from '../components/Bloomberg'

import { Container } from '../components/Container'
import { SearchStock } from '../components/SearchStock'
import { Sidebar } from '../components/Sidebar'
import { TitlePage } from '../components/TitlePage'

const Graphic = dynamic(() => import('../components/Graphic'))
const SideOver = dynamic(() => import('../components/SideOver'))

const Home: NextPage = () => {
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

        <Graphic />

        <Bloomberg />
      </Container>

      <SideOver />
    </Box>
  )
}

export default Home
