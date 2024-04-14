import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/src/lib'
import { Session } from '@supabase/supabase-js'

interface AuthDataType {
  session: Session | null
}

const AuthContext = createContext<AuthDataType>({
  session: null
})

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>()
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log(data, error)
      setSession(data.session)
    }
    fetchSession()
  }, [])
  return <AuthContext.Provider value={{ session: session! }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
