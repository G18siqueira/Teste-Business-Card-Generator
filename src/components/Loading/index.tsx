import * as G from '@/styles/global'
import * as S from './styles'
import loadingImg from '../../assets/loading.svg'
import Image from 'next/image'

interface LoadingProps {}
export default function Loading(props: LoadingProps) {
  return (
    <main>
      <S.LoadingSection>
        <G.Container>
          <S.LoadingWrapper>
            <Image
              src={loadingImg}
              priority={true}
              alt="uma imagem animada de 4 quadrados animados desempenhando o papel de um carregamento"
            />
            <h2>Aguarde, estamos gerando o seu cartão de visíta!</h2>
          </S.LoadingWrapper>
        </G.Container>
      </S.LoadingSection>
    </main>
  )
}
