import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native'

import { PizzaSize } from '@/src/types'
import { Button, Icon } from '@ant-design/react-native'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const product = products.find((product) => product.id.toString() === id)

  if (!product) return <Text>product not find</Text>

  const [selectSize, setSelectSize] = useState<PizzaSize>('M')

  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

  const addToCard = () => {}

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />

      <Text style={styles.selectSize}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => {
              setSelectSize(size)
            }}
            style={[styles.size, { backgroundColor: selectSize === size ? '#ddd' : '#fff' }]}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectSize === size ? '#000' : 'gray'
                }
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.title}>${product.price}</Text>

      <Link
        href="/cart"
        asChild
      >
        <Button
          type="primary"
          onPress={addToCard}
        >
          Add to cart
        </Button>
      </Link>
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
    marginVertical: 10,
    marginTop: 'auto'
  },
  selectSize: {
    fontSize: 18
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center'
  },
  size: {
    borderRadius: 30,
    aspectRatio: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
})

export default ProductDetailsScreen
