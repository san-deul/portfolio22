// 
import styled from "styled-components"

export const Tag3 = styled.div`
  display: inline-block;
  
  background:#f1f1f1;
  background: #d4e5f5; 
  color:#7c7c7c;;
  border-radius:1.5625rem;
  padding:0.3rem 0.625rem;
  font-size: var(--font-size-sm);
  
  font-weight:${({ theme }) => theme.fontWeight.bold};

  @media ${({ theme }) => theme.device.tablet} {


  }
`

