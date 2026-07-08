// 파란 배경 , 흰색 글자
import styled from "styled-components"

export const Tag2 = styled.div`
  display: inline-block;
  color:#fff;  
  background: #185fa5; 
  border-radius:1.5625rem;
  padding:0.3125rem 0.625rem;
  font-size:0.9rem;
  font-weight:${({ theme }) => theme.fontWeight.bold};
`

