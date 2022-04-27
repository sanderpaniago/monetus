import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useNewsStock } from 'src/hooks/useNewsStock'
import { SliderLayout } from '../SliderLayout'

export default function News() {
  const { data } = useNewsStock('aapl')

  return (
    <SliderLayout
      title={
        <>
          <Image
            src="/icons/recent-companies.svg"
            alt="recent companies"
            width={24}
            height={24}
          />
          <Text fontSize="xl" fontWeight="semibold">
            News
          </Text>
        </>
      }
    >
      {data?.map(item => (
        <Box key={item.datetime} bg="white" p={4} borderRadius="md">
          <Box
            d="flex"
            alignItems={'center'}
            justifyContent="space-between"
            w="full"
          >
            <Image
              src={item.image}
              alt={item.headline}
              width={36}
              height={36}
              style={{ borderRadius: '50%' }}
              objectFit="cover"
            />
            <Text fontSize="sm" fontWeight="semibold">
              {item.datetime}
            </Text>
          </Box>
          <Text
            mt={2}
            fontWeight="regular"
            color="gray.600"
            lineHeight={1}
            noOfLines={2}
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize={['sm', 'md']}
          >
            {item.headline}
          </Text>
        </Box>
      ))}
    </SliderLayout>
  )
}
