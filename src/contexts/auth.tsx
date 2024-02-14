/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { type User as SBUser, type Session } from '@supabase/supabase-js';
import { supabase } from '@/services/supabase';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type User = { id: string; email: string };
type AuthContextProps = {
  signIn: (e: string, p: string) => Promise<string>;
  signOut: () => Promise<void>;
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: BTypes.FCChildren) => {
  const [user, setUser] = useState<AuthContextProps['user']>(null);
  const [loading, setLoading] = useState<AuthContextProps['loading']>(false);
  const router = useRouter();

  function handleSession(session: Session | null) {
    if (!session?.access_token) return cookies.remove('__AUTH');
    cookies.set('__AUTH', session.access_token, {
      expires: session.expires_in,
      path: '/',
    });
  }

  function handleUser(data: { session: Session | null; user: SBUser | null } | null) {
    if (data?.user && data?.session) {
      handleSession(data.session);
      setUser({ email: data.user.email!, id: data.user.id });
      return;
    }
    handleSession(null);
    setUser(null);
  }

  const signIn: AuthContextProps['signIn'] = async (email, password) => {
    setLoading(true);
    return await supabase.auth
      .signInWithPassword({ email, password })
      .then((res) => {
        if (res.error) throw res.error.name;
        handleUser(res.data);
        return 'success';
      })
      .finally(() => setLoading(false));
  };

  const signOut = async () => {
    setLoading(true);
    return supabase.auth
      .signOut()
      .then(() => {
        handleUser(null);
        router.push('/login');
      })
      .catch(() => handleUser(null))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) =>
      handleUser({ user: session?.user || null, session }),
    );
  }, []);

  const value = useMemo(() => ({ user, loading, signIn, signOut }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
