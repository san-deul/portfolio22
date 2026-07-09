// 하늘색 배경 , 블루 글자
import styled from "styled-components"


export const Tag1 = styled.div`
  display: inline-block;
  color:var(--blue-main);
  background: var(--blue-sub);
  border-radius:1.5625rem;
  padding:0.3125rem 0.625rem;
  font-size:0.9rem;
  font-weight:${({ theme }) => theme.fontWeight.bold};
`

