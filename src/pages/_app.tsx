import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClientProvider } from 'react-query'

import { SidebarDrawerProvider } from 'src/context/SidebarDrawerContext'
import { queryClient } from 'src/services/queryClient'
import { WishlistProvider } from 'src/context/Wishlist'

import 'src/styles/fonts.css'
import 'src/styles/react-apexchart.css'
import theme from 'src/styles/theme'
import 'react-loading-skeleton/dist/skeleton.css'

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
