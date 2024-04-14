import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native'

import ProductItem from '@/src/components/productItem'

import products from '@/assets/data/products'

import { supabase } from '@/src/lib/supabase'

import { useQuery } from '@tanstack/react-query'

export default function Product() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (error) {
        throw new Error(error.message)
      }
      return data
    }
  })

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
