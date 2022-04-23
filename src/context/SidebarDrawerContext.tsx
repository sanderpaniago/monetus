import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = {
  isOpenState: (name: string) => boolean
  onOpenState: (name: string) => void
  onClose: () => void
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({
  children
}: SidebarDrawerProviderProps) {
  const router = useRouter()
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [sideOverName, setSideOverName] = useState('')

  const isOpenState = (name: string) => isOpen && name === sideOverName

  const onOpenState = (name: string) => {
    setSideOverName(name)
    onOpen()
  }

  useEffect(() => {
    onClose()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider
      value={{ isOpenState, onClose, onOpenState }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
