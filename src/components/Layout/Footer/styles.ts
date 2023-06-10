import styled from 'styled-components'

export const TagFooter = styled.footer`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 56px;
  font-size: 0.871rem;
  color: var(--gray-800);

  @media screen and (min-width: 768px) {
    justify-content: center;
    font-size: 0.875rem;
  }

  a {
    color: var(--gray-800);
    font-weight: 700;
  }
`
