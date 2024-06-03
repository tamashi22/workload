import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppHeader } from '@/components/AppHeader';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/signIn');
    }
  }, [router]);
  return (
    <div className="container">
      <AppHeader />
      <Component {...pageProps} />
    </div>
  );
}
