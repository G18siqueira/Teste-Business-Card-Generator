import { useContext } from 'react'
import { DataContext } from '@/contexts/DataContext'
import { formatPhoneNumber } from '@/utils/formatter'
import { MdOutlineKeyboardArrowLeft, MdArrowRightAlt } from 'react-icons/md'

import Button from '../Ui/Button'
import Link from 'next/link'
import Image from 'next/image'

import cardImg from '../../assets/landingpage2.png'
import symbolImg from '../../assets/symbol.svg'
import arrowImg from '../../assets/arrowDown.svg'

import * as G from '@/styles/global'
import * as S from './styles'

interface CardScreenProps {}
export default function CardScreen(props: CardScreenProps) {
  const { dataValue, clearData } = useContext(DataContext)

  const handdleClearBack = () => {
    clearData()
  }

  return (
    <S.CardScreenSection>
      <G.Container>
        <S.CardWrapper>
          <S.CardImg>
            <Image src={cardImg} width={456} height={336} alt="" />
          </S.CardImg>

          <S.CardContent>
            <S.CardAnother onClick={handdleClearBack}>
              <MdOutlineKeyboardArrowLeft />
              <span>Gerar outro cartão</span>
            </S.CardAnother>

            <S.Card>
              <Image src={symbolImg} width={70} height={60} alt="" />

              <S.CardSeparator />

              <S.CardInfos>
                <p>{dataValue.name}</p>
                <p>{formatPhoneNumber(dataValue.phone)}</p>
                <p>{dataValue.email}</p>
              </S.CardInfos>
            </S.Card>

            <Button disabled={true}>
              <Image src={arrowImg} width={10} height={16} alt="" /> Baixar
              Cartão
            </Button>

            <Link
              href="https://app.rdstation.com.br/signup"
              target="_blank"
              aria-label=""
            >
              <span>fazer um teste grátis do RD Station Marketing</span>
              <MdArrowRightAlt size={30} />
            </Link>
          </S.CardContent>
        </S.CardWrapper>
      </G.Container>
    </S.CardScreenSection>
  )
}
