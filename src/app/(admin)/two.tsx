import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Link href="/(admin)/menu">
        <Text>/admin/menus</Text>
      </Link>
      <Link href="/(user)/menu">
        <Text>/user/menu</Text>
      </Link>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
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
