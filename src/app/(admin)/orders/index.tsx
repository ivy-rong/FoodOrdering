import { FlatList, StyleSheet } from 'react-native'

import ProductItem from '@/src/components/productItem'

import products from '@/assets/data/products'

export default function Order() {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
    />
  )
}

const styles = StyleSheet.create({})
