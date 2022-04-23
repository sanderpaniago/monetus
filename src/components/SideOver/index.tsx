import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSidebarDrawer } from 'src/context/SidebarDrawerContext'
import { UserBar } from '../UserBar'
import { Wishlist } from '../Wishlist'

export default function SideOver() {
  const { isOpenState, onClose } = useSidebarDrawer()
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer
        isOpen={isOpenState('sideOver')}
        placement="right"
        size="full"
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent bg="white">
            <DrawerCloseButton mt="6" />
            <DrawerBody>
              <Wishlist />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box
      background="white"
      w={'30%'}
      maxW={'400px'}
      maxH="100%"
      px={6}
      py={8}
      overflowY="auto"
    >
      <UserBar />
      <Wishlist />
    </Box>
  )
}
