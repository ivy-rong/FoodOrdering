import { FlatList, StyleSheet } from 'react-native'

import OrderItem from '@/src/components/orderItem'

import orders from '@/assets/data/orders'

export default function Order() {
  return (
    <FlatList
      showsVerticalScrollIndicator={true}
      // scrollEnabled={false}
      horizontal={false}
      numColumns={1}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      data={orders}
      renderItem={({ item }) => <OrderItem order={item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    width: '100%'
  }
})
