import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppHeader } from '@/components/AppHeader';
import NProgress from 'nprogress';
import Router from 'next/router';
import '@/styles/globals.scss';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/signIn');
    }
  }, []);
  return (
    <div className="container">
      <AppHeader />
      <Component {...pageProps} />
    </div>
  );
}
