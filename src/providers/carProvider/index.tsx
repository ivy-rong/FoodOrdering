import { createContext, useContext, PropsWithChildren, useState } from 'react'
import { CartItem } from '@/src/types'
import { useRouter } from 'expo-router'

interface CartType {
  items: CartItem[]
  addItem: (item: CartItem, size: CartItem['size']) => void
  updateQuantity: (itemId: number, amount: -1 | 1) => void
  total: number
  checkout: () => void
}

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
  checkout: () => {}
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  const total = items.reduce((sum, item) => (sum += item.quantity), 0)

  const router = useRouter()

  const addItem = (cartItem: CartItem, size: CartItem['size']) => {
    const existingItem = items.find((item) => item.id === cartItem.id)

    // if (existingItem) {
    //   return
    // }

    setItems([...items, { ...cartItem, size }])
  }
  const updateQuantity = (itemId: number, amount: 1 | -1) => {}

  const checkout = () => {}

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total, checkout }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(CartContext)
