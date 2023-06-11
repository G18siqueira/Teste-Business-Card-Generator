import styled from 'styled-components'

export const CardScreenSection = styled.section`
  opacity: 0;
  transform: translateX(2rem);
  animation: animate 0.5s forwards;

  @keyframes animate {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`
export const CardWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 456px 510px;
    align-items: center;
    justify-content: center;
    gap: 5.9375rem;
  }

  img {
    display: none;

    @media screen and (min-width: 1200px) {
      display: block !important;
    }
  }
`
export const CardContent = styled.div`
  width: 100%;
  max-width: 31.875rem;
  margin: 0 auto;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);
    margin: 1.75rem 0 0;

    &:hover {
      span {
        &::before {
          width: 100%;
        }
      }
      svg {
        transform: translateX(0.3125rem);
      }
    }

    span {
      position: relative;
      &::before {
        content: '';
        width: 0;
        height: 0.0625rem;
        background: var(--white);
        position: absolute;
        left: 0;
        bottom: -0.3125rem;
        transition: all 0.3s ease-in-out;
      }
    }

    svg {
      transition: all 0.3s ease-in-out;
    }
  }
`
export const CardAnother = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--white);
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(-0.3125rem);
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  color: #000;
  padding: 0.9688rem 2.25rem;
  margin: 1rem 0;
  border-radius: 24px;

  @media screen and (min-width: 510px) {
    padding: 2rem 2.5rem 2rem 4.5rem;
  }

  img {
    display: block;
    width: 45px;
    height: 38px;

    @media screen and (min-width: 510px) {
      width: 70px;
      height: 60px;
    }
  }
`
export const CardSeparator = styled.div`
  display: block;
  flex: none;
  width: 0.1875rem;
  height: 11.4375rem;
  background-color: var(--purple-300);
  margin: 0 1.25rem;
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  p {
    font-size: 0.875rem;

    @media screen and (min-width: 510px) {
      font-size: 1.25rem;
    }
  }
`
