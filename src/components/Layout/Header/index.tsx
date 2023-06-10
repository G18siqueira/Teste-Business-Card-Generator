import * as G from '@/styles/global'
import * as S from './styles'

import Image from 'next/image'
import logoImg from '../../../assets/logo.svg'

export default function Header() {
  return (
    <S.TagHeader>
      <G.Container>
        <S.Content>
          <Image src={logoImg} alt="logo resultados digitais" />
          <span>Gerador de Cartão de Visita</span>
        </S.Content>
      </G.Container>
    </S.TagHeader>
  )
}
