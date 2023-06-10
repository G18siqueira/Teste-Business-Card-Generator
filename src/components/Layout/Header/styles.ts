import styled from 'styled-components'

export const TagHeader = styled.header`
  background-color: var(--white);
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;

  img {
    width: 6.25rem;

    @media screen and (min-width: 768px) {
      width: 9.1875rem;
    }
  }
  span {
    font-family: var(--darkerGrotesque);
    font-size: 1.125rem;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`
