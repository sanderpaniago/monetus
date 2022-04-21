import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export function Logo() {
  return (
    <Flex
      background="primary"
      h={12}
      w={12}
      align="center"
      justify="center"
      borderRadius="full"
    >
      <Image src="/icons/logo.svg" width={29} height={21} alt="Monetus Logo" />
    </Flex>
  )
}
