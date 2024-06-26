import { Button, WhiteSpace } from '@ant-design/react-native'
import { Link, Redirect } from 'expo-router'
import { View, ActivityIndicator } from 'react-native'
import { useAuth } from '@/src/providers/authProvider'

const Index = () => {
  const { session, loading, isAdmin } = useAuth()

  if (loading) return <ActivityIndicator />

  if (!session) return <Redirect href="/login" />

  // if (!isAdmin) return <Redirect href="/(user)" />

  //console.log('index', session)
  return (
    <View className="flex-1 justify-center  items-center bg-white gap-4 px-10">
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
      <Link
        href={'/(auth)/login'}
        asChild
      >
        <Button
          type="primary"
          style={{ width: '100%' }}
        >
          login
        </Button>
      </Link>
    </View>
  )
}

export default Index
