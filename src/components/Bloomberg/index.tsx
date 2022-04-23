import { useRef } from 'react'
import Image from 'next/image'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { GetListStockQuery } from '@generated/graphql'

import { ButtonWishList } from '../ButtonWishList'
import { CardStock } from '../CardStock'

import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  stocks?: GetListStockQuery['getListStock']
}

export default function Bloomberg({ stocks }: Props) {
  const prevButton = useRef(null)
  const nextButton = useRef(null)
  return (
    <Box mt={8} w="full">
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
        modules={[Navigation]}
        slidesPerView={3.5}
        breakpoints={{
          1400: {
            slidesPerView: 3.5
          },
          1240: {
            slidesPerView: 2.75
          },
          768: {
            slidesPerView: 2.5
          },
          500: {
            slidesPerView: 2.15
          },
          300: {
            slidesPerView: 1.5
          }
        }}
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
              btnWishList={<ButtonWishList stock={stock} />}
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
