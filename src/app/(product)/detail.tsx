import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'
import ProductItem from '@/src/components/productItem'

export default function Product() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>详情</Text>
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
