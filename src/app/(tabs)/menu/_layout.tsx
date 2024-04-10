import { FontAwesome } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable } from 'react-native'
import Colors from '@/src/constants/Colors'
import { useColorScheme } from '@/src/components/useColorScheme'
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue'

export default function MenuStack() {
  const colorScheme = useColorScheme()
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link
            href="/cart"
            asChild
          >
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        )
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Menu' }}
      />
    </Stack>
  )
}
