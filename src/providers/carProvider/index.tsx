import { createContext } from 'react'

export const cartContext = createContext<any>({})

interface Props {
  children: React.ReactNode
}

const CartProvider = ({ children }) => {
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
