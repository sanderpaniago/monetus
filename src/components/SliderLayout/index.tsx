import { Box, Flex, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRef } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

type Props = {
  children: React.ReactElement[] | undefined
  title: React.ReactElement
}

export function SliderLayout({ children, title }: Props) {
  const prevButton = useRef(null)
  const nextButton = useRef(null)
  return (
    <Box mt={8} w="full">
      <Flex align="center" mb={6} justify="space-between">
        <Flex gap={2}>{title}</Flex>
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
          1600: {
            slidesPerView: 5.5
          },
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
        {children?.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
