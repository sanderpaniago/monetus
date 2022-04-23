import { Box, BoxProps } from '@chakra-ui/react'

interface ContainerProps extends BoxProps {
  children: React.ReactNode
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <Box
      {...props}
      as="main"
      d="flex"
      flexDirection="column"
      w="full"
      height="100vh"
      background="gray.100"
      borderRadius="24px 0px 0px 0px;"
      px={5}
      py={8}
    >
      {children}
    </Box>
  )
}
