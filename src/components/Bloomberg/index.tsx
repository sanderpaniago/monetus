import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ButtonWishList } from '../BUttonWishList'
import { CardStock } from '../CardStock'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { useRef } from 'react'

export function Bloomberg() {
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
          <Button ref={prevButton}>
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow navigation"
              width={12}
              height={12}
            />
          </Button>
          <Button transform={'rotate(180deg)'} ref={nextButton}>
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
        <SwiperSlide>
          <CardStock
            btnWishList={<ButtonWishList />}
            changePercent={2.3}
            companyName="Facebook"
            symbol="FB"
            icon="/icons/facebook.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStock
            btnWishList={<ButtonWishList />}
            changePercent={2.3}
            companyName="Facebook"
            symbol="FB"
            icon="/icons/facebook.svg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStock
            btnWishList={<ButtonWishList />}
            changePercent={2.3}
            companyName="Facebook"
            symbol="FB"
            icon="/icons/facebook.svg"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
