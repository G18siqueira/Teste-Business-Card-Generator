import styled from 'styled-components'

export const FormScrenSection = styled.section`
  opacity: 0;
  transform: translateX(-2rem);
  animation: animate 0.5s forwards;

  @keyframes animate {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`
export const Content = styled.div``
export const Title = styled.div`
  max-width: 620px;
  margin: 0 auto 2.75rem;
  text-align: center;

  h1 {
    font-family: var(--redHatDisplay);
    font-size: 1.5rem;
    margin: 0 0 1rem;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 100%;
    max-width: 29.4375rem;
    height: 100%;
    max-height: 21.6875rem;

    object-fit: cover;
  }
`
