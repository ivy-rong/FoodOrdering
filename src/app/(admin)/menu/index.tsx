import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native'

import ProductItem from '@/src/components/productItem'

import { useProductList } from '@/src/api'

export default function Product() {
  const { data, isLoading, error } = useProductList()

  if (isLoading) return <ActivityIndicator />

  if (error) {
    return <Text>{error.message}</Text>
  }
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      data={data}
      renderItem={({ item }) => <ProductItem product={item} />}
    />
  )
}

const styles = StyleSheet.create({})
