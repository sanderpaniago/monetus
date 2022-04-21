import { Box } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMathExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMathExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMathExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMathExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      <Box d="flex" alignItems="center" position="relative">
        {isActive && (
          <Box
            h="48px"
            w="4px"
            background="orange.500"
            position="absolute"
            left={-6}
            borderRadius="0 8px 8px 0"
          />
        )}
        {cloneElement(children, {
          color: isActive ? 'pink.400' : 'gray.50'
        })}
      </Box>
    </Link>
  )
}
