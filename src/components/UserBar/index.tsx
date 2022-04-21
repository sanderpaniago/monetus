import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

export function UserBar() {
  return (
    <Box
      d="flex"
      alignItems="center"
      borderWidth={1}
      borderColor="blue.50"
      borderRadius="full"
      p={1}
      justifyContent="space-between"
    >
      <Image
        src="https://github.com/sanderpaniago.png"
        alt="Sander Pereira Paniago"
        width={32}
        height={32}
      />
      <Text fontWeight={500} color="primary">
        Sander Pereira Paniago
      </Text>

      <Box as="button" height="16px" w={8}>
        <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} />
      </Box>
    </Box>
  )
}
