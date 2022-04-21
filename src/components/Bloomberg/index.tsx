import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { ButtonWishList } from '../BUttonWishList'
import { CardStock } from '../CardStock'

export function Bloomberg() {
  return (
    <Box>
      <Flex align="center" gap={2}>
        <Image
          src="/icons/recent-companies.svg"
          alt="recent companies"
          width={24}
          height={24}
        />
        <Text fontSize="xl" fontWeight="semibold">
          Empresas recentes
        </Text>
      </Flex>
      <HStack mt={4}>
        <CardStock
          btnWishList={<ButtonWishList />}
          changePercent={2.3}
          companyName="Facebook"
          symbol="FB"
          icon="/icons/facebook.svg"
        />
        <CardStock
          btnWishList={<ButtonWishList />}
          changePercent={2.3}
          companyName="Facebook"
          symbol="FB"
          icon="/icons/facebook.svg"
        />
        <CardStock
          btnWishList={<ButtonWishList />}
          changePercent={2.3}
          companyName="Facebook"
          symbol="FB"
          icon="/icons/facebook.svg"
        />
      </HStack>
    </Box>
  )
}
