import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'

import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { queryClient } from '../services/queryClient'

import '../styles/fonts.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}></Hydrate>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
