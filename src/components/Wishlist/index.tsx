import { Box, Flex, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useWishlist } from 'src/context/Wishlist'
import { CardStock } from '../CardStock'

export function Wishlist() {
  const { items, removeItemBySymbol } = useWishlist()
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
        {items.map(item => (
          <Box d="flex" w="full" key={item.symbol}>
            <CardStock
              changePercent={item.changePercent}
              companyName={item.companyName}
              symbol={item.symbol}
              variant="shadow"
            />

            <Box
              as="button"
              aria-label="delete-item-wishlist"
              ml={2}
              onClick={() => removeItemBySymbol(item.symbol)}
            >
              <Image src="/icons/delete.svg" alt="" width={24} height={24} />
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
