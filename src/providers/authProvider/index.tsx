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
      console.log(data, error)

      setSession(data.session)
      if (session) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
        setProfile(data || null)
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
