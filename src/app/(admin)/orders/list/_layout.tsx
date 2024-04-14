import { Tabs, withLayoutContext } from 'expo-router'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native'
const Tab = withLayoutContext(createMaterialTopTabNavigator().Navigator)

function MyTabs() {
  return
  ;<SafeAreaView>
    <Tab></Tab>
  </SafeAreaView>
}
