import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useSidebarDrawer } from 'src/context/SidebarDrawerContext'

export function UserBar() {
  const { onOpenState } = useSidebarDrawer()
  return (
    <Box
      d="flex"
      alignItems="center"
      borderWidth={1}
      borderColor="blue.50"
      borderRadius="full"
      p={1}
      justifyContent="space-between"
      maxH="40px"
      onClick={() => onOpenState('sideOver')}
    >
      <Image
        src="https://github.com/sanderpaniago.png"
        alt="Sander Pereira Paniago"
        width={32}
        height={32}
      />
      <Text
        fontWeight={500}
        color="primary"
        maxW="60%"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        Sander Pereira Paniago
      </Text>

      <Box as="button" aria-label="profile-button" height="16px" w={8}>
        <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} />
      </Box>
    </Box>
  )
}
