import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/src/lib'
import { Session } from '@supabase/supabase-js'

interface AuthDataType {
  session: Session | null
  loading: boolean
  profile: any
  isAdmin: boolean
}

const AuthContext = createContext<AuthDataType>({
  session: null,
  profile: null,
  loading: true,
  isAdmin: false
})

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>()
  const [profile, setProfile] = useState<any>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      setSession(data.session)
      console.log('session222222', session)
      console.log('data.session', data.session)
      if (data.session) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.session.user.id)
          .single()
        setProfile(data || null)
        console.log('profile11111', profileData)
      }

      setLoading(false)

      console.log('profile', profile)
    }
    fetchSession()
  }, [])
  return (
    <AuthContext.Provider
      value={{ session: session!, loading, profile, isAdmin: profile?.group === 'ADMIN' }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
