import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { getStockBySymbol } from 'src/hooks/useStockBySymbol'

export function SearchStock() {
  const { push } = useRouter()
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  async function handleSearchStock(e: FormEvent) {
    e.preventDefault()
    if (search.length > 0) {
      try {
        const data = await getStockBySymbol(search)

        if (!data?.symbol) {
          setError('Stock not found')
          return
        }
        setError('')
        push(`/${data.symbol}`)
      } catch (error) {
        setError('Stock not found')
      }
    }
  }

  return (
    <Box>
      <InputGroup
        as="form"
        onSubmit={handleSearchStock}
        background="white"
        maxW={364}
        mt={8}
        borderRadius="md"
      >
        <Input
          placeholder="Buscar empresa"
          value={search}
          onChange={e => setSearch(e.target.value)}
          textTransform="uppercase"
          isInvalid={error.length > 0}
          errorBorderColor="red.300"
          fontWeight={500}
          _placeholder={{
            color: '#ACACAC',
            textTransform: 'none'
          }}
        />
        <InputRightElement>
          <Button aria-label="search" type="submit" background="primary" p={2}>
            <Image
              src="/icons/search.svg"
              alt="search"
              width={24}
              height={24}
            />
          </Button>
        </InputRightElement>
      </InputGroup>
      {error.length > 0 && (
        <Text mt={1} ml={1} textColor="red.400" fontWeight={500} fontSize="sm">
          Empresa não encontrada
        </Text>
      )}
    </Box>
  )
}
