import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { queryClient } from '../services/queryClient'

import '../styles/fonts.css'
import theme from '../styles/theme'
import 'react-loading-skeleton/dist/skeleton.css'
import { WishlistProvider } from 'src/context/Wishlist'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <WishlistProvider>
            <SidebarDrawerProvider>
              <Component {...pageProps} />
            </SidebarDrawerProvider>
          </WishlistProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
