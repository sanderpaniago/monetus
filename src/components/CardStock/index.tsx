import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useLogoStock } from '../../hooks/useLogoStock'

type Props = {
  btnWishList?: React.ReactElement
  symbol: string
  companyName: string
  changePercent: number
  variant?: 'primary' | 'shadow'
}

export function CardStock({
  companyName,
  symbol,
  btnWishList,
  changePercent,
  variant = 'primary'
}: Props) {
  const { data } = useLogoStock(symbol)

  return (
    <Link
      href={'/'}
      as={{
        query: {
          stock: symbol
        }
      }}
      passHref
    >
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
        {btnWishList && btnWishList}
        <Flex align="center" gap={2}>
          {data && data.url && (
            <Image
              src={data.url}
              alt={companyName}
              width={36}
              height={36}
              style={{ borderRadius: '50%' }}
              objectFit="contain"
            />
          )}
          <Box>
            <Text fontWeight="medium" lineHeight={1}>
              {symbol}
            </Text>
            <Text
              fontWeight="regular"
              color="gray.600"
              lineHeight={1}
              maxW={'110px'}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {companyName}
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={2} ml="auto" mr={0}>
          <Text
            color={changePercent > 0 ? 'green.400' : 'red.400'}
            fontSize="sm"
            fontWeight="semibold"
            fontFamily="montserrat"
          >
            {changePercent > 0
              ? `+${changePercent.toFixed(2)}`
              : changePercent.toFixed(2)}
            %
          </Text>
          <Image
            src={
              changePercent > 0
                ? '/icons/graph-up.svg'
                : '/icons/graph-down.svg'
            }
            alt="recent companies"
            width={16}
            height={16}
          />
        </Flex>
      </Flex>
    </Link>
  )
}
