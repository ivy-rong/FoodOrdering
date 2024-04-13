import { Button, WhiteSpace } from '@ant-design/react-native'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const Index = () => {
  return (
    <View className="flex-1 justify-center  items-center bg-white !gap-4 !px-10">
      <Link
        href={'/(user)'}
        asChild
        className=""
      >
        <Button
          type="primary"
          style={{ width: '100%' }}
        >
          User
        </Button>
      </Link>
      <Link
        href={'/(admin)'}
        asChild
      >
        <Button
          type="primary"
          style={{ width: '100%' }}
        >
          Admin
        </Button>
      </Link>
    </View>
  )
}

export default Index
