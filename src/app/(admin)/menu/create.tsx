import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable, ImageBackground } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { PizzaSize } from '@/src/types'
import { Button, Icon, InputItem, List } from '@ant-design/react-native'
import { useImmer } from 'use-immer'

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const CreateScreen = () => {
  const { id: idString } = useLocalSearchParams()
  const id = parseFloat(typeof idString === 'string' ? idString : idString?.[0])
  const isUpdating = !!idString

  const [product, updateProduct] = useImmer({
    name: '',
    price: '',
    image: ''
  })

  const [errors, setErrors] = useState('')

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      console.log(result)
      updateProduct((draft) => {
        draft.image = result.assets[0].uri
      })
    } else {
      alert('You did not select any image.')
    }
  }

  const validateInput = () => {
    setErrors('')
    if (!product.name) {
      setErrors('Name is required')
      return false
    }
    if (!product.price) {
      setErrors('Price is required')
      return false
    }
    if (isNaN(parseFloat(product.price))) {
      setErrors('Price is not a number')
      return false
    }
    return true
  }

  const handleCreate = () => {
    console.log(product)
  }
  const handleProduct = () => {}

  const handelSubmit = () => {
    if (!validateInput()) {
      return
    }
    if (isUpdating) {
      handleProduct()
    } else {
      handleCreate()
    }
  }

  return (
    <View
      //style={styles.container}
      className="p-4  flex-1 bg-gray-100"
    >
      <Stack.Screen options={{ title: isUpdating ? 'Update Product' : 'Create Product' }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text
        onPress={handlePickImage}
        style={styles.textButton}
        className="text-blue-500 text-center m-2"
      >
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={product.name}
        onChangeText={(value) => {
          updateProduct((draft) => {
            draft.name = value
          })
        }}
        placeholder="Name"
        style={styles.input}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        value={product.price}
        onChangeText={(value) => {
          updateProduct((draft) => {
            draft.price = value
          })
        }}
        placeholder="Price"
        style={styles.input}
      />

      <Button
        type="primary"
        onPress={handelSubmit}
      >
        create
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gary',
    padding: 10,
    borderRadius: 20,
    flex: 1
    // maxWidth: '50%'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  textButton: {
    fontSize: 18
  },
  label: {
    color: 'gray',
    fontSize: 16
  }
})

export default CreateScreen
