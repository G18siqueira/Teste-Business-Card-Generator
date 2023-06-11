import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import { GlobalStyle } from '@/styles/global'

import DataProvider from '@/contexts/DataContext'

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
