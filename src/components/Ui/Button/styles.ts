import styled from 'styled-components'

export const GeneralButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  height: 3rem;
  background-color: var(--yellow-700);
  border: 1px solid #100c27;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    width: 100%;
    height: 0.25rem;
    background-color: var(--black);
    position: absolute;
    bottom: -5px;
    clip-path: polygon(0 0, 100% 0, 99.5% 100%, 0.6% 100%);
  }

  &:not(:disabled)&:hover {
    border-color: var(--yellow-300);
    background-color: var(--yellow-300);

    span,
    svg {
      transform: translateX(0.3125rem);
    }
  }

  &:disabled {
    background-color: var(--gray-200);
    border: 0;
    cursor: not-allowed;
    &::after {
      background-color: var(--gray-600);
      bottom: -4px;
    }
  }

  span,
  svg {
    transition: all 0.3s ease-in-out;
  }
`
