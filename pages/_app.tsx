import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { Reset } from 'styled-reset';
import { mainTheme, GlobalStyles } from '../styles/global-style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ThemeProvider theme={mainTheme}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
          />
          <Reset />
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
