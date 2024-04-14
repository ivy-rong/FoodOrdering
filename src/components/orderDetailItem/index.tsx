import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { OrderItem } from '@/src/types'
const defaultImage = 'https://via.placeholder.com/150'

interface Props {
  orderItem: OrderItem
}

export default function OrderDetailItem({ orderItem }: Props) {
  return (
    <Pressable className="bg-white flex flex-row p-5 justify-between items-center rounded-md gap-2">
      <View className="flex-none ">
        <Image
          source={{ uri: orderItem.products.image || defaultImage }}
          className="w-16 h-16 rounded-full"
        />
      </View>
      <View className="flex-1  ">
        <Text className="text-lg font-bold">{orderItem.products.name}</Text>
        <View className="flex flex-row justify-start items-center gap-3">
          <Text className="text-lg font-bold text-blue-500">${orderItem.products.price}</Text>
          <Text className="font-medium">Size: {orderItem.size}</Text>
        </View>
      </View>
      <View className="flex-none">
        <Text className="font-semibold">{orderItem.quantity}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({})
