// 연한 회색 배경 , 진한 회색 글자
import styled from "styled-components"

export const Tag4 = styled.div`
  display: inline-block;
  color: var(--blue-main);
  background: rgba(120, 135, 160, 0.12);
  border-radius: 1.5625rem;
  padding:0.3rem 0.625rem;
  font-size: var(--font-size-sm);
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  box-shadow: 0.125rem 0.125rem 0.375rem rgba(120, 135, 160, 0.25);
`