import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

import { PizzaSize } from '@/src/types'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const product = products.find((product) => product.id.toString() === id)

  if (!product) return <Text>product not find</Text>

  const [size, setSize] = useState<PizzaSize>()

  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />

      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSize(size)
            }}
          >
            <Text>{size}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1
    // maxWidth: '50%'
  },

  image: {
    width: '100%',
    aspectRatio: 1
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center'
  }
})

export default ProductDetailsScreen
