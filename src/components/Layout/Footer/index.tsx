import * as G from '@/styles/global'
import * as S from './styles'

export default function Footer() {
  return (
    <S.TagFooter>
      <G.Container>
        <S.Content>
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Política de Privacidade
          </a>
          <span>© 2023 Resultados Digitais</span>
        </S.Content>
      </G.Container>
    </S.TagFooter>
  )
}
