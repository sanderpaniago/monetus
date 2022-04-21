import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import Image from 'next/image'
import { ElementType } from 'react'
import { ActiveLink } from './ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon: string
  altIcon: string
  href: string
}

export function NavLink({ icon, altIcon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink d="flex" align="center" {...rest}>
        <Image src={icon} width={32} height={32} alt={altIcon} />
      </ChakraLink>
    </ActiveLink>
  )
}
