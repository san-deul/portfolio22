import styled from "styled-components"
import { Pause } from "lucide-react"

export const ButtonGlassmorphism = styled.div`

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${({ theme }) => theme.glassmorphism.base.background};
  backdrop-filter: blur(${({ theme }) => theme.glassmorphism.base.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.glassmorphism.base.blur});
  border:  ${({ theme }) => theme.glassmorphism.base.border};
  box-shadow:${({ theme }) => theme.glassmorphism.base.boxShadow};

  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;

  svg {
    color: #ffffff;
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.glassmorphism.hover.background};
    border: ${({ theme }) => theme.glassmorphism.hover.border};
    box-shadow: ${({ theme }) => theme.glassmorphism.hover.boxShadow};
    transform: scale(1.05);
  }
`