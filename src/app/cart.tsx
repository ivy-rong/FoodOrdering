import { View, StyleSheet, Platform, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useCart } from '@/src/providers/carProvider'
import { Button } from '@ant-design/react-native'
import { CartItem, PizzaSize, Product } from '@/src/types'
// export type PizzaSize = 'S' | 'M' | 'L' | 'XL'

//
// export type Product = {
//   id: number
//   image: string | null
//   name: string
//   price: number
// }

// export const useCart = () => useContext(CartContext)
//  addItem: (item: CartItem, size: CartItem['size']) => void

export default function CardScreen() {
  const cart = useCart()
  return (
    <View style={s.container}>
      <Text>{cart.items.length}</Text>
      <Button
        onPress={() =>
          cart.addItem(
            {
              id: '2222',
              product: {
                id: 1221,
                image: 'https://www.example.com/image.jpg',
                name: 'Pizza',
                price: 10
              },
              product_id: 1221,
              size: 'XL',
              quantity: 1221
            },
            'XL'
          )
        }
      >
        点击加一
      </Button>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
