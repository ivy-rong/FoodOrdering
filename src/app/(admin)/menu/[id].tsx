import Colors from '@/src/constants/Colors'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  ActivityIndicator
} from 'react-native'

import { PizzaSize } from '@/src/types'
import { Button, Icon } from '@ant-design/react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useProduct } from '@/src/api'

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams()

  const [selectSize, setSelectSize] = useState<PizzaSize>('M')

  const id = parseFloat(typeof idString === 'string' ? idString : idString[0])

  const { data: product, isLoading, error } = useProduct(id)

  if (!product) return <Text>product not find</Text>

  if (isLoading) return <ActivityIndicator />

  if (error) return <Text>{error.message}</Text>

  const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

  const addToCard = () => {}

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Stack.Screen
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link
              href={`/(admin)/menu/create?id=${id}`}
              asChild
            >
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />

      <Text style={styles.title}>name:{product.name}</Text>

      <Text style={styles.title}>price:{product.price}</Text>
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
  selectSize: {
    fontSize: 18
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
})

export default ProductDetailsScreen
