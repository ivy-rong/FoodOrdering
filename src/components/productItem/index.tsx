import { View, Text, Image, StyleSheet } from 'react-native'

import { Product } from '@/src/types'
import { Link } from 'expo-router'

interface Props {
  product: Product
}

const defaultImage = 'https://via.placeholder.com/150'

export default function ProductItem({ product }: Props) {
  return (
    <Link href={{ pathname: '/detail' }}>
      <View style={styles.container}>
        <Image source={{ uri: product?.image || defaultImage }}></Image>
        <Text>{product?.name}</Text>
        <Text>{product?.price}</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 20,
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
