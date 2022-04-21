import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export function ButtonWishList() {
  return (
    <Box as="button" type="button" aria-label="wishlist-button" height={'16px'}>
      <Image
        src="/icons/star-outline.svg"
        alt="button add wishlist"
        width={16}
        height={16}
      />
    </Box>
  )
}
