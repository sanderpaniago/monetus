import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClientProvider } from 'react-query'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { queryClient } from '../services/queryClient'

import '../styles/fonts.css'
import theme from '../styles/theme'
import 'react-loading-skeleton/dist/skeleton.css'
import { WishlistProvider } from 'src/context/Wishlist'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <WishlistProvider>
            <SidebarDrawerProvider>
              {getLayout(<Component {...pageProps} />)}
            </SidebarDrawerProvider>
          </WishlistProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
