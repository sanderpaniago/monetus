import { useRef } from 'react'
import Image from 'next/image'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { ButtonWishList } from '../BUttonWishList'
import { CardStock } from '../CardStock'
import { Stock } from '../../hooks/useListStock'

import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  stocks?: Stock[]
}

export function Bloomberg({ stocks }: Props) {
  const prevButton = useRef(null)
  const nextButton = useRef(null)
  return (
    <Box mt={8} w="full" maxW="750px">
      <Flex align="center" mb={6} justify="space-between">
        <Flex gap={2}>
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
        <Flex>
          <Button ref={prevButton} arial-label="next-bloomberg-card">
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow navigation"
              width={12}
              height={12}
            />
          </Button>
          <Button
            transform={'rotate(180deg)'}
            arial-label="prev-bloomberg-card"
            ref={nextButton}
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow navigation"
              width={12}
              height={12}
            />
          </Button>
        </Flex>
      </Flex>
      <Swiper
        lazy={{ loadPrevNext: true }}
        modules={[Navigation]}
        slidesPerView={2.5}
        navigation={{
          nextEl: nextButton.current,
          prevEl: prevButton.current
        }}
        onBeforeInit={swiper => {
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevButton.current
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextButton.current
        }}
        spaceBetween={16}
      >
        {stocks?.map(stock => (
          <SwiperSlide key={stock.symbol}>
            <CardStock
              btnWishList={<ButtonWishList />}
              changePercent={stock.changePercent}
              companyName={stock.companyName}
              symbol={stock.symbol}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
