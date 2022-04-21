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
    }
  }
})

export default theme
