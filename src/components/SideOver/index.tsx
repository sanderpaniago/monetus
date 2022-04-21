import { Box } from '@chakra-ui/react'
import { UserBar } from '../UserBar'
import { Wishlist } from '../Wishlist'

export function SideOver() {
  return (
    <Box background="white" w={'30%'} maxW={'400px'} px={6} pt={8}>
      <UserBar />
      <Wishlist />
    </Box>
  )
}
