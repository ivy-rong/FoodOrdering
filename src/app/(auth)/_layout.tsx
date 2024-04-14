import { StyleSheet } from 'react-native'

import { Redirect, Stack } from 'expo-router'

import { useAuth } from '@/src/providers/authProvider'

export default function AuthLayout() {
  // const { session } = useAuth()

  // if (session) {
  //   return <Redirect href="/" />
  // }

  return <Stack />
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
