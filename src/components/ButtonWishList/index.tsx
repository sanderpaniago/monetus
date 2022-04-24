import { Box, Tooltip } from '@chakra-ui/react'
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
    <Tooltip
      hasArrow
      label={hasAdded ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      placement="top"
      bg="primary"
      color="white"
      borderRadius="md"
      boxShadow="custom"
    >
      <Box
        as="button"
        type="button"
        aria-label="wishlist-button"
        h="20px"
        w="20px"
        d="flex"
        alignItems="center"
        justifyContent="center"
        onClick={() => toggleItemBySymbol(stock)}
      >
        <Image
          src={hasAdded ? '/icons/star.svg' : '/icons/star-outline.svg'}
          alt="button add wishlist"
          width={18}
          height={18}
        />
      </Box>
    </Tooltip>
  )
}
