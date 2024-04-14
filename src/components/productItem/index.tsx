import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Colors from '@/src/constants/Colors'
import { Product } from '@/src/types'
import { Link, useSegments } from 'expo-router'

interface Props {
  product: Product
}

const defaultImage = 'https://via.placeholder.com/150'

export default function ProductItem({ product }: Props) {
  const segments = useSegments()

  const path = segments[0] || '(user)'

  return (
    <Link
      href={`/${String(segments[0])}/menu/${product.id}`}
      asChild
    >
      {/* href={`/${segments[0]}/menu/${product.id}`} */}
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaultImage }}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
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
  }
})
