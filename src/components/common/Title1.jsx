import styled, { keyframes } from "styled-components";

export const Title1 = styled.div`
  font-family: var(--mainfont);
  font-size:3.75rem;
  font-weight:${({ theme }) => theme.fontWeight.bold};
  
  background: ${({ theme }) => theme.gradients.blue.css};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;
  display:inline-block;
  margin: 0 auto;
  display: table;
  padding:0.375rem 0;
`