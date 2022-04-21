import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Graphik, system-ui, sans-serif',
    montserrat: 'Montserrat, system-ui, sans-serif'
  },
  colors: {
    primary: '#0047BB',
    gray: {
      100: '#F5F8FA',
      600: '#657786'
    },
    blue: {
      50: 'rgba(0, 71, 187, 0.2)'
    }
  },
  shadows: {
    custom: '0px 4px 12px rgba(222, 222, 231, 0.4)',
    card: '0px 8px 20px -2px rgba(43, 37, 63, 0.1)'
  }
})

export default theme
