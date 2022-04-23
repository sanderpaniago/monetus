import { Stock } from '@generated/graphql'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface WishlistProviderProps {
  children: ReactNode
}

type Item = Stock

type WishlistContextData = {
  items: Item[]
  removeItemBySymbol: (symbol: string) => void
  addItemBySymbol: (symbol: string) => void
  getItemBySymbol: (symbol: string) => void
}

const WishlistContext = createContext({} as WishlistContextData)

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [items, setItems] = useState<Item[]>([])

  function removeItemBySymbol(symbol: string) {
    const newItems = items.filter(item => item.symbol !== symbol)
    setItems(newItems)
  }

  function addItemBySymbol(symbol: string) {
    const newItems = [...items, { symbol }]
    // setItems(newItems)
  }

  function getItemBySymbol(symbol: string) {}

  return (
    <WishlistContext.Provider
      value={{ items, removeItemBySymbol, addItemBySymbol, getItemBySymbol }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
