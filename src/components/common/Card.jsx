import styled from "styled-components";
/*
export const Card = styled.div`
  width: 520px;
  height: auto;
  border-radius: 20px;
  //background: var(--clr-card);
  background: transparent;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  //box-shadow: 0 8px 32px var(--clr-glow);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  color: var(--clr-text);
  padding: 32px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 3;
`;
*/


export const Card = styled.div`
  width: 520px;
  height: auto;
  border-radius: 20px;

  /* 기존 스타일 유지 */
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  color: var(--clr-text);
  padding: 32px;

  position: relative;
  overflow: hidden;
  z-index: 3;

  /* PC hover 효과 */


  /* =========================================
     📱 반응형 대응
     ========================================= */

  /* 태블릿 사이즈 */
  @media (max-width: 1024px) {
    width: 85%;
    padding: 24px;

    /* hover OFF */
    &:hover {
      transform: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  /* 모바일 사이즈 */
  @media (max-width: 600px) {
    width: 100%;
    padding: 20px;

    /* hover OFF (중복 방지용) */
    &:hover {
      transform: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
