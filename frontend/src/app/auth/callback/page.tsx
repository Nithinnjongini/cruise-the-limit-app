'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import toast from 'react-hot-toast';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setTokenFromOAuth } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      setTokenFromOAuth(token).then(() => {
        toast.success('Logged in successfully!');
        router.replace('/');
      });
    } else {
      toast.error('Authentication failed');
      router.replace('/login');
    }
  }, [searchParams, setTokenFromOAuth, router]);

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}
