import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Container } from './Container'

const Sidebar = dynamic(() => import('./Sidebar'))
const SideOver = dynamic(() => import('./SideOver'))

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Box w="100vw" height="100vh" d="flex">
      <Sidebar />

      <Container d="flex" flex={1}>
        {children}
      </Container>

      <SideOver />
    </Box>
  )
}
