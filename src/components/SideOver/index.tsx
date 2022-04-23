import { Box, useBreakpointValue } from '@chakra-ui/react'
import { UserBar } from '../UserBar'
import { Wishlist } from '../Wishlist'

export default function SideOver() {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return null
  }

  return (
    <Box background="white" w={'30%'} maxW={'400px'} px={6} pt={8}>
      <UserBar />
      <Wishlist />
    </Box>
  )
}
