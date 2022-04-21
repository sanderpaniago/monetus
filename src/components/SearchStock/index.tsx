import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import Image from 'next/image'

export function SearchStock() {
  return (
    <InputGroup background="white" maxW={364} mt={8} borderRadius="md">
      <Input placeholder="Buscar empresa" />
      <InputRightElement>
        <Button aria-label="search" background="primary" p={2}>
          <Image src="/icons/search.svg" alt="search" width={24} height={24} />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
