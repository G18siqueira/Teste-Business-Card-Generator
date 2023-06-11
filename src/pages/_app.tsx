import { Layout } from '@/components/Layout'
import DataProvider from '@/contexts/DataContext'
import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </Layout>
  )
}
