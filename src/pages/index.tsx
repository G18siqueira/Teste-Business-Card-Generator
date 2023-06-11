import { useContext } from 'react'
import { DataContext } from '@/contexts/DataContext'

import FormScreen from '@/components/FormScreen'
import CardScreen from '@/components/CardScreen'
import Loading from '@/components/Loading'
import Seo from '@/components/Seo'

export default function Home() {
  const { submitted, isLoading } = useContext(DataContext)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Seo
      title="Gerador de Cartão de Visita"
      description="Crie grátis seu cartão de visita em passos rápidos!"
      seoUrl=""
    >
      {submitted ? <CardScreen /> : <FormScreen />}
    </Seo>
  )
}
