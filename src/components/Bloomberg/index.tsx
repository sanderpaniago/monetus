import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import { GetListStockQuery } from '@generated/graphql'

import { ButtonWishList } from '../ButtonWishList'
import { CardStock } from '../CardStock'

import 'swiper/css'
import 'swiper/css/navigation'
import { SliderLayout } from '../SliderLayout'

type Props = {
  stocks?: GetListStockQuery['getListStock']
}

export default function Bloomberg({ stocks }: Props) {
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
            Empresas recentes
          </Text>
        </>
      }
    >
      {stocks?.map(stock => (
        <CardStock
          key={stock.symbol}
          btnWishList={<ButtonWishList stock={stock} />}
          changePercent={stock.changePercent}
          companyName={stock.companyName}
          symbol={stock.symbol}
        />
      ))}
    </SliderLayout>
  )
}
