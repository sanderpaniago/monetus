import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { queryClient } from '../services/queryClient'

import '../styles/fonts.css'
import theme from '../styles/theme'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
