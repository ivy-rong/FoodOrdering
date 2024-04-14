import { FontAwesome } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable } from 'react-native'
import Colors from '@/src/constants/Colors'
import { useColorScheme } from '@/src/components/useColorScheme'
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue'

export default function OrderStack() {
  const colorScheme = useColorScheme()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'index1111', headerShown: true }}
      />
      <Stack.Screen
        name="list"
        options={{ title: 'order', headerShown: true }}
      />
    </Stack>
  )
}
