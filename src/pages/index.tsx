import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Bloomberg } from '../components/Bloomberg'

import { Container } from '../components/Container'
import { Graphic } from '../components/Graphic'
import { Sidebar } from '../components/Sidebar'
import { SideOver } from '../components/SideOver'
import { TitlePage } from '../components/TitlePage'

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

        <Graphic />

        <Bloomberg />
      </Container>
      <SideOver />
    </Box>
  )
}

export default Home
