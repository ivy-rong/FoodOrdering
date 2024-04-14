import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import orders from '@/assets/data/orders'
import OrderDetailItem from '@/src/components/orderDetailItem'
import OrderItem from '@/src/components/orderItem'

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams()

  const orderItem = orders.find((item) => item.id.toString() === id)

  console.log(orderItem)

  if (!orderItem) return <Text>order not find</Text>
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: orderItem?.id.toString() }} />

      <FlatList
        showsVerticalScrollIndicator={true}
        horizontal={false}
        numColumns={1}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        data={orderItem.order_items}
        renderItem={({ item }) => <OrderDetailItem orderItem={item} />}
        ListHeaderComponent={() => <OrderItem order={orderItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red'
  }
})
