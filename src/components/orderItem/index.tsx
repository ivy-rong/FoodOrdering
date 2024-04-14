import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Order } from '@/src/types'
import { Link, useSegments } from 'expo-router'
import dayjs from 'dayjs'

interface Props {
  order: Order
}

export default function OrderItem({ order }: Props) {
  const segments = useSegments()

  const path = segments[0] || '(user)'

  return (
    <Link
      href={`/${segments[0]}/orders/${order.id}`}
      asChild
    >
      <Pressable className="bg-white flex flex-row p-4 justify-between items-center rounded-md">
        <View className="flex gap-4 ">
          <Text className="text-lg font-bold">order #{order.id}</Text>
          <Text>{dayjs(order.created_at).format('YYYY-MM-DD')}</Text>
        </View>
        <View>
          <Text className="font-semibold">{order.status}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({})
