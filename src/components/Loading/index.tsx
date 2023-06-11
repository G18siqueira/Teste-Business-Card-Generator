import * as G from '@/styles/global'
import * as S from './styles'
import loadingImg from '../../assets/loading.svg'
import Image from 'next/image'

interface LoadingProps {}
export default function Loading(props: LoadingProps) {
  return (
    <S.LoadingSection>
      <G.Container>
        <S.LoadingWrapper>
          <Image src={loadingImg} alt="" />
          <h2>Aguarde, estamos gerando o seu cartão de visíta!</h2>
        </S.LoadingWrapper>
      </G.Container>
    </S.LoadingSection>
  )
}
