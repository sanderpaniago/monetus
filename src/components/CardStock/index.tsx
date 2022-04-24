import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
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
  const { data, isLoading } = useLogoStock(symbol)

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
      _hover={{ boxShadow: 'card' }}
    >
      {btnWishList && btnWishList}
      <Link href={`/${symbol}`} passHref>
        <Box d="flex" alignItems="center" flex={1} gap={2}>
          <Flex align="center" gap={2}>
            {isLoading ? (
              <Skeleton borderRadius="50%" width={36} height={36} />
            ) : (
              data &&
              data.url && (
                <Box width="34px" h="34px">
                  <Image
                    src={data.url}
                    alt={companyName}
                    width={34}
                    height={34}
                    style={{ borderRadius: '50%' }}
                    objectFit="contain"
                  />
                </Box>
              )
            )}
            <Box>
              <Text fontWeight="medium" lineHeight={1}>
                {symbol}
              </Text>
              <Text
                fontWeight="regular"
                color="gray.600"
                lineHeight={1}
                maxW={'100px'}
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
        </Box>
      </Link>
    </Flex>
  )
}
