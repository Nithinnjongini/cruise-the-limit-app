'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { api } from './api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatarUrl?: string;
  role: 'USER' | 'ADMIN';
  provider: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; firstName: string; lastName: string }) => Promise<void>;
  logout: () => void;
  setTokenFromOAuth: (token: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = useCallback(async (accessToken: string) => {
    try {
      const profile = await api.auth.profile(accessToken) as any;
      setUser(profile);
      setToken(accessToken);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
      setToken(null);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) {
      fetchProfile(stored).finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [fetchProfile]);

  const login = async (email: string, password: string) => {
    const res = await api.auth.login({ email, password }) as any;
    localStorage.setItem('token', res.accessToken);
    setToken(res.accessToken);
    setUser(res.user);
  };

  const register = async (data: { email: string; password: string; firstName: string; lastName: string }) => {
    const res = await api.auth.register(data) as any;
    localStorage.setItem('token', res.accessToken);
    setToken(res.accessToken);
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  const setTokenFromOAuth = async (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    await fetchProfile(accessToken);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAdmin: user?.role === 'ADMIN',
        login,
        register,
        logout,
        setTokenFromOAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
