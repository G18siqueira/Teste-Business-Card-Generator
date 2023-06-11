import * as G from '@/styles/global'
import * as S from './styles'
import Form from './components/Form'
import Image from 'next/image'
import cardImg from '../../assets/landingpage1.png'

interface FormScreenProps {}
export default function FormScreen(props: FormScreenProps) {
  return (
    <S.FormScrenSection>
      <G.Container>
        <S.Content>
          <S.Title>
            <h1> Gerador de Cartão de Visita</h1>
            <p>
              Crie grátis seu cartão de visita em passos rápidos! Você o insere
              no Instagram e demais canais digitais.
            </p>
          </S.Title>
          <S.FormWrapper>
            <Image src={cardImg} width={471} height={347} alt="" />
            <Form />
          </S.FormWrapper>
        </S.Content>
      </G.Container>
    </S.FormScrenSection>
  )
}
