import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import orders from '@/assets/data/orders'
import OrderDetailItem from '@/src/components/orderDetailItem'
import OrderItem from '@/src/components/orderItem'
import { Button } from '@ant-design/react-native'
import { OrderStatusList } from '@/src/types'
import Colors from '@/src/constants/Colors'

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
        ListFooterComponent={() => (
          <View>
            <Text className="font-semibold text-xl mb-2">Status</Text>
            <View className="flex flex-row gap-2">
              {OrderStatusList.map((status) => (
                <Button type={status === orderItem.status ? 'primary' : 'ghost'}>{status}</Button>
              ))}
            </View>
          </View>
        )}
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
