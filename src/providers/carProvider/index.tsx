import { createContext, PropsWithChildren } from 'react'
import { CartItem } from '@/src/types'

export const cartContext = createContext<cartType>({
  item: [],
  addItem: () => {}
})

interface Props {
  children: React.ReactNode
}

const CartProvider = ({ children }: PropsWithChildren) => {
  return
  ;<cartContext.Provider
    value={{
      items: [],
      onAddItem: () => {}
    }}
  >
    {children}
  </cartContext.Provider>
}

export default CartProvider
