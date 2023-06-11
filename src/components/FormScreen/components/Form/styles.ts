import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 620px;
`

export const WrapperContainer = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'wrapper1 wrapper1' 'wrapper2 wrapper3';
    gap: 1.5rem 40px;
  }
`
export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      grid-area: wrapper1;
    }
    &:nth-child(2) {
      grid-area: wrapper2;
    }
    &:nth-child(3) {
      grid-area: wrapper3;
    }
  }

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--white);
    margin: 0 0 0.75rem;
  }

  input {
    width: 100%;
    height: 2.25rem;
    font-size: 0.875rem;
    color: var(--gray-800);
    line-height: 1.4;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    padding: 0 0.75rem;

    &:hover,
    &:focus {
      background-color: var(--gray-100);
    }
  }

  span {
    color: var(--yellow-700);
    font-size: 0.75rem;
  }
`
export const Agree = styled.div`
  margin: 2rem 0;
  font-size: 12px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
    padding: 0;
    margin: 0 0 1.25rem;
    list-style: none;
    list-style-position: inside;
  }

  li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 0 0 0.8125rem;
    line-height: 1.5;
    position: relative;

    @media screen and (min-width: 768px) {
      align-items: center;
    }

    &::before {
      content: '';
      display: block;
      width: 0.3125rem;
      height: 0.3125rem;
      background-color: var(--white);
      margin: 0 0.75rem 0 0;
      border-radius: 50%;
      position: absolute;
      top: 6px;
      left: 0;

      @media screen and (min-width: 768px) {
        top: initial;
      }
    }
  }

  a {
    color: var(--white);
  }
`
