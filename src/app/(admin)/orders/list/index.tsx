import { FlatList, StyleSheet, View } from 'react-native'

import OrderItem from '@/src/components/orderItem'

import orders from '@/assets/data/orders'
import { Stack } from 'expo-router'

export default function Order() {
  return (
    <View>
      {/* <Stack.Screen options={{ title: 'order' }} /> */}
      <FlatList
        showsVerticalScrollIndicator={true}
        // scrollEnabled={false}
        horizontal={false}
        numColumns={1}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
