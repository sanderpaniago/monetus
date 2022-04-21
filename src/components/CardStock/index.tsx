import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  btnWishList?: React.ReactElement
  icon: string
  symbol: string
  companyName: string
  changePercent: number
  variant?: 'primary' | 'shadow'
}

export function CardStock({
  companyName,
  icon,
  symbol,
  btnWishList,
  changePercent,
  variant = 'primary'
}: Props) {
  return (
    <Flex
      align="center"
      gap={2}
      background="white"
      borderRadius={'md'}
      px={5}
      py={'18px'}
      maxW="300px"
      w="full"
      cursor="pointer"
      boxShadow={variant === 'shadow' ? 'card' : 'none'}
    >
      <Flex align="center" gap={2}>
        {btnWishList && btnWishList}
        <Image src={icon} alt={companyName} width={36} height={36} />
        <Box>
          <Text fontWeight="medium" lineHeight={1}>
            {symbol}
          </Text>
          <Text fontWeight="regular" color="gray.600" lineHeight={1}>
            {companyName}
          </Text>
        </Box>
      </Flex>

      <Flex align="center" gap={2} ml="auto" mr={0}>
        <Text
          color="green.400"
          fontSize="sm"
          fontWeight="semibold"
          fontFamily="montserrat"
        >
          +{changePercent}%
        </Text>
        <Image
          src="/icons/graph-up.svg"
          alt="recent companies"
          width={16}
          height={16}
        />
      </Flex>
    </Flex>
  )
}
