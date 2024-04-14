import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import orders from '@/assets/data/orders'

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams()

  const orderItem = orders.find((item) => item.id.toString() === id)

  if (!orderItem) return <Text>order not find</Text>
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: orderItem?.id.toString() }} />
      <Text style={styles.title}>OrderDetailScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
