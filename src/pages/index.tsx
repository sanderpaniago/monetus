import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Bloomberg } from '../components/Bloomberg'

import { Container } from '../components/Container'
import { Graphic } from '../components/Graphic'
import { Sidebar } from '../components/Sidebar'
import { TitlePage } from '../components/TitlePage'

const Home: NextPage = () => {
  return (
    <Box w="100vw" height="100vh" d="flex">
      <Sidebar />

      <Container>
        <TitlePage
          title="Dashboard"
          icon="/icons/dashboard.svg"
          iconLabel="dashboard icon four square"
        />

        <Graphic />

        <Bloomberg />
      </Container>
    </Box>
  )
}

export default Home
