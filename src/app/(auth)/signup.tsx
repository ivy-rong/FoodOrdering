import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../constants/Colors'
import { Link, Stack } from 'expo-router'
import { Button } from '@ant-design/react-native'
import { supabase } from '@/src/lib'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'SignUp' }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />
      <View className="flex !gap-4">
        <Button
          onPress={signUpWithEmail}
          disabled={loading}
          type="primary"
        >
          {loading ? '注册中' : '注册'}
        </Button>

        <Link
          href="/(auth)/login"
          style={styles.textButton}
        >
          登录
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1
  },
  label: {
    color: 'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10
  }
})

export default SignUp
