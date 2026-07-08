// ✅ src/components/common/Title.jsx
import styled, { keyframes } from "styled-components";

const neon = keyframes`
  0%{
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 
    0 0 40px #B6FF00, 
    0 0 70px #B6FF00, 
    0 0 80px #B6FF00, 0 0 100px #B6FF00, 
    0 0 150px #B6FF00;
  }
  100%{
    text-shadow: 0 0 5px #fff, 
    0 0 10px #fff, 0 0 15px #fff, 
    0 0 20px #B6FF00, 0 0 35px #B6FF00, 
    0 0 40px #B6FF00, 0 0 50px #B6FF00, 
    0 0 75px #B6FF00;
  }
      `;

export const Title = styled.div`
  font-size: 3.75rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  color:#fff;
  ///animation: ${neon} 1.5s ease-in-out infinite alternate;
`;
