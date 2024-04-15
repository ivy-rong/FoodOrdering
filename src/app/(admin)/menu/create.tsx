import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { PizzaSize, Product } from '@/src/types'
import { Button } from '@ant-design/react-native'
import { useImmer } from 'use-immer'
import { useDeleteProduct, useInsertProduct, useProduct, useUpdateProduct } from '@/src/api'

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const CreateScreen = () => {
  const [product, updateProduct] = useImmer<Omit<Product, 'id'>>({
    name: '',
    price: null,
    image: ''
  })
  const [id, setId] = useState<number | null>(null)

  const [errors, setErrors] = useState('')

  const { id: idString } = useLocalSearchParams()

  const { mutate: insertProduct, isPending: isInsertPengding } = useInsertProduct()

  const { mutate: updatedProduct, isPending: isUpdatePending } = useUpdateProduct()

  const { mutate: deleteProduct, isPending: isDeletePending } = useDeleteProduct()

  const { data: updatingProduct } = useProduct(id!)

  const router = useRouter()

  console.log(typeof idString === 'string', 'typeof idString === ')

  const isUpdating = !!idString

  useEffect(() => {
    if (idString) {
      setId(parseFloat(typeof idString === 'string' ? idString : idString[0]))
      console.log(id, 'id')
    }
  }, [idString])

  useEffect(() => {
    if (isUpdating) {
      // 获取更新的值
      updateProduct((draft) => {
        //const { name, price, image } = updatingProduct
        draft.name = updatingProduct?.name
        draft.price = updatingProduct?.price
        draft.image = updatingProduct?.image
      })
    }
  }, [id])

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      //console.log(result)
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

  const resetFields = () => {
    // updateProduct({})
  }

  const handleCreate = () => {
    insertProduct(product, {
      onSuccess: () => {
        console.log('Product created successfully')
        //清空数据
        resetFields()
        router.back()
      }
    })
  }
  const handleUpdate = () => {
    updatedProduct(
      {
        id: id!,
        ...product
      },
      {
        onSuccess: () => {
          console.log('Product updated successfully')
          //清空数据
          resetFields()
          router.back()
        }
      }
    )
  }

  const handelSubmit = () => {
    if (!validateInput()) {
      return
    }
    if (isUpdating) {
      handleUpdate()
    } else {
      handleCreate()
    }
  }

  const onDelete = () => {
    deleteProduct(id!, {
      onSuccess: () => {
        resetFields()
        router.replace('/(admin)')
      }
    })
  }

  const handleDelete = () => {
    Alert.alert('Are you sure?', 'Do you really want to delete this product?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: onDelete }
    ])
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
        value={product.price?.toString() || ''}
        onChangeText={(value) => {
          updateProduct((draft) => {
            if (value === '') {
              draft.price = null // 或者设置其他默认值
            } else {
              const parsedValue = parseFloat(value)
              draft.price = isNaN(parsedValue) ? null : parsedValue
            }
          })
        }}
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
      />

      <Text className="text-red-400 mb-2">{errors}</Text>

      <Button
        type="primary"
        onPress={handelSubmit}
        style={styles.button}
        disabled={isInsertPengding || isUpdatePending || isDeletePending}
      >
        {isUpdating ? 'update' : 'create'}
      </Button>

      {isUpdating && (
        <Button
          onPress={handleDelete}
          disabled={isDeletePending || isUpdatePending}
        >
          delete
        </Button>
      )}
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
  },
  button: {
    marginBottom: 10
  }
})

export default CreateScreen
