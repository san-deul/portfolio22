import styled from "styled-components"



export const ButtonPill = styled.div`
  position:relative;
  border-radius:25px;
  box-shadow: ${({ theme }) => theme.neumorphism.raised()};
  transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: ${({ theme }) => theme.neumorphism.pressed()};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    color:blue;
    pointer-events: none; 
  }

  &:hover {
    box-shadow: none; 
    cursor: pointer;
    &::after {
      opacity: 1;
    }
  }

`