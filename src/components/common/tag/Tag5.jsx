// 진한 회색 배경 , 흰색 글자
import styled from "styled-components"

export const Tag5 = styled.div`
  display: inline-block;
  color: #fff;
  background: var(--gray-sub);
  border-radius: 1.5625rem;
  padding: 0.3125rem 0.625rem;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`