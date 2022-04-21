import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

type TitlePageProps = {
  title: string
  icon: string
  iconLabel: string
}

export function TitlePage({ title, icon, iconLabel }: TitlePageProps) {
  return (
    <Box d="flex" gap="10px">
      <Image src={icon} alt={iconLabel} width={24} height={24} />
      <Text fontSize="2xl" fontWeight={600}>
        {title}
      </Text>
    </Box>
  )
}
