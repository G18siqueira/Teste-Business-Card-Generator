import styled from 'styled-components'

export const LoadingSection = styled.section`
  opacity: 0;
  transform: translateY(-2rem);
  animation: animate 0.5s forwards;

  @keyframes animate {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 150px;
    margin: 0 0 1rem;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`
