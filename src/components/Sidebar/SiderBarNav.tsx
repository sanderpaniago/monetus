import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavLink href="/" icon="/icons/home.svg" altIcon="Link Home" />
    </Stack>
  )
}
