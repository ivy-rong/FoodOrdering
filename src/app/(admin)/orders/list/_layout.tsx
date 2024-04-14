import { Tabs, withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator)

export default function OrderListNavigator() {
  return (
    <TopTabs
      initialLayout={{ width: Dimensions.get('window').width }} // 设置初始布局
      style={{ backgroundColor: 'red' }}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14
          // backgroundColor: 'red'
        },
        tabBarGap: 10,
        tabBarItemStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
          //backgroundColor: 'pink'
        },
        tabBarStyle: {
          //backgroundColor: 'powderblue'
        }
      }}
    >
      <TopTabs.Screen
        name="index"
        options={{ title: 'Active1111' }}
      />
      <TopTabs.Screen
        name="archive"
        options={{ title: 'archive222' }}
      />
      <TopTabs.Screen
        name="text"
        options={{ title: 'textrr' }}
      />
    </TopTabs>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'red'
//   }
// })
