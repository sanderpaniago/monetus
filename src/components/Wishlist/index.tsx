import { Box, Flex, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { CardStock } from '../CardStock'

export function Wishlist() {
  return (
    <Box>
      <Flex align="center" gap={2} mt={8}>
        <Image
          src="/icons/star.svg"
          alt="Empresas favoritas"
          width={24}
          height={24}
        />
        <Text fontSize="lg" fontWeight={600}>
          Empresas favoritas
        </Text>
      </Flex>

      <VStack w="full" mt={8} spacing="32px">
        <Box d="flex" w="full">
          <CardStock
            changePercent={2.5}
            companyName="Twitter"
            symbol="TWTR"
            variant="shadow"
          />

          <Box as="button" aria-label="delete-item-wishlist" ml={2}>
            <Image src="/icons/delete.svg" alt="" width={24} height={24} />
          </Box>
        </Box>

        <Box d="flex" w="full">
          <CardStock
            changePercent={2.5}
            companyName="Twitter"
            symbol="TWTR"
            variant="shadow"
          />

          <Box as="button" aria-label="delete-item-wishlist" ml={2}>
            <Image src="/icons/delete.svg" alt="" width={24} height={24} />
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}
