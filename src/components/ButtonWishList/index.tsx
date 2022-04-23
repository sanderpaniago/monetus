import { Box } from '@chakra-ui/react'
import { Stock } from '@generated/graphql'
import Image from 'next/image'
import { useWishlist } from 'src/context/Wishlist'

type Props = {
  stock: Stock
}

export function ButtonWishList({ stock }: Props) {
  const { toggleItemBySymbol, getItemBySymbol } = useWishlist()

  const hasAdded = Boolean(getItemBySymbol(stock.symbol))
  return (
    <Box
      as="button"
      type="button"
      aria-label="wishlist-button"
      height={'16px'}
      onClick={() => toggleItemBySymbol(stock)}
    >
      <Image
        src={hasAdded ? '/icons/star.svg' : '/icons/star-outline.svg'}
        alt="button add wishlist"
        width={16}
        height={16}
      />
    </Box>
  )
}
