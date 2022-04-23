import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { useSidebarDrawer } from 'src/context/SidebarDrawerContext'
import { UserBar } from '../UserBar'

type TitlePageProps = {
  title: string
  icon: string
  iconLabel: string
}

export function TitlePage({ title, icon, iconLabel }: TitlePageProps) {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })
  const { onOpenState } = useSidebarDrawer()
  return (
    <Box d="flex" justifyContent="space-between" alignItems="center">
      <Box d="flex" gap="10px" alignItems="center">
        <Box as="button" onClick={() => onOpenState('sidebar')} height="24px">
          <Image src={icon} alt={iconLabel} width={24} height={24} />
        </Box>
        <Text fontSize="2xl" fontWeight={600}>
          {title}
        </Text>
      </Box>

      {isDrawerSideBar && (
        <Box maxW="48%">
          <UserBar />
        </Box>
      )}
    </Box>
  )
}
