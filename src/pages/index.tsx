import { useContext } from 'react'
import { DataContext } from '@/contexts/DataContext'
import FormScreen from '@/components/FormScreen'
import Head from 'next/head'
import CardScreen from '@/components/CardScreen'
import Loading from '@/components/Loading'

export default function Home() {
  const { submitted, isLoading } = useContext(DataContext)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Gerador de Cartão de Visita</title>
        <meta
          name="description"
          content="Crie grátis seu cartão de visita em passos rápidos!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {submitted ? <CardScreen /> : <FormScreen />}
    </>
  )
}
