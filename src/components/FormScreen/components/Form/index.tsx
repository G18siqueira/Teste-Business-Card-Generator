import { useState, FormEvent, ChangeEvent, useContext } from 'react'
import { DataContext } from '@/contexts/DataContext'
import { formatPhoneNumber } from '@/utils/formatter'
import { MdArrowRightAlt } from 'react-icons/md'

import Button from '@/components/Ui/Button'
import Link from 'next/link'

import * as S from './styles'

interface FormData {
  name: string
  email: string
  phone: string
}

export default function Form() {
  const { dataValue, setDataValue, setSubmitted, setIsLoading } =
    useContext(DataContext)

  const [errors, setErrors] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let cleanedValue = value

    if (name === 'phone') {
      cleanedValue = cleanedValue.replace(/\D/g, '')
    }

    setDataValue((prevData) => ({ ...prevData, [name]: cleanedValue }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      setTimeout(() => {
        setDataValue((prevData) => ({ ...prevData }))
        setSubmitted(true)
        setIsLoading(false)
      }, 4000)
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors: FormData = {
      name: '',
      email: '',
      phone: '',
    }

    // Validating name
    if (dataValue.name.trim().length < 2) {
      newErrors.name = 'Digite o seu Nome e Sobrenome'
      isValid = false
    }

    // Validating email
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(dataValue.email)) {
      newErrors.email = 'Digite um endereço de email válido'
      isValid = false
    }

    // Validating phone
    const phoneRegex = /^(\d{2})(\d{4,5})(\d{4})$/
    if (!phoneRegex.test(dataValue.phone)) {
      newErrors.phone = 'Digite um número de telefone válido'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.WrapperContainer>
        <S.Wrapper>
          <label htmlFor="name">Nome*</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ex: Pedro Silva"
            value={dataValue.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </S.Wrapper>
        <S.Wrapper>
          <label htmlFor="phone">Telefone*</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="(00) 0 0000-0000"
            value={formatPhoneNumber(dataValue.phone)}
            onChange={handleChange}
            maxLength={15}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </S.Wrapper>
        <S.Wrapper>
          <label htmlFor="email">E-mail*</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="nome@email.com"
            value={dataValue.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </S.Wrapper>
      </S.WrapperContainer>
      <S.Agree>
        <ul>
          <li>
            Ao preencher o formulário, concordo * em receber comunicações de
            acordo com meus interesses.
          </li>
          <li>
            <span>
              Ao informar meus dados, eu concordo com a{' '}
              <Link
                href="https://legal.rdstation.com/pt/privacy-policy/"
                target="_blank"
                aria-label=""
              >
                Política de privacidade.
              </Link>
            </span>
          </li>
        </ul>

        <p>
          * Você pode alterar suas permissões de comunicação a qualquer momento.
        </p>
      </S.Agree>
      <Button type="submit">
        <span>Gerar Cartão Grátis</span>
        <MdArrowRightAlt size={26} />
      </Button>
    </S.Form>
  )
}
