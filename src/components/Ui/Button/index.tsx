import React, { ButtonHTMLAttributes } from 'react'
import { GeneralButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return <GeneralButton {...props}></GeneralButton>
}
