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
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { Logo } from '../Logo'
import { SidebarNav } from './SiderBarNav'

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="white" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>
              <Logo />
            </DrawerHeader>

            <DrawerBody mt={6}>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" px={6} py={5}>
      <Logo />
      <Box mt={12}>
        <SidebarNav />
      </Box>
    </Box>
  )
}
