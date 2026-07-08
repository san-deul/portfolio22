import styled from "styled-components"



export const ButtonCircle = styled.div`
  position:relative;
  background:#EEF2FA;
  border-radius:50%; 
  box-shadow: ${({ theme }) => theme.neumorphism.raised()};
  transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: ${({ theme }) => theme.neumorphism.pressed()};
    opacity: 0;
    transition: opacity 0.15s ease;
    pointer-events: none;
  }
  ${({ $noHover }) =>
    !$noHover &&
  `
  &:hover {
    cursor: pointer;

    &::before {
      opacity: 1;
    }

  }
  `}

  

`