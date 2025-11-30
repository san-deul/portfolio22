import styled from "styled-components";

/**
 * 공용 섹션 레이아웃 컴포넌트
 * Section: 전체 섹션 단위
 * SectionIn: 섹션 내부 컨테이너 (중앙 정렬 + 최대 너비)
 */

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  
  position: relative;
  //background: ${({ bg }) => bg || "transparent"};
    
  /*  
    background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #f9f9fb 0%, #f1edff 100%)"
      : "radial-gradient(circle at center,#5F4BD8 0%,#0B0730 100%)"};

    */
    background:radial-gradient(circle at center, #5F4BD8 0%, #0B0730 100%);

    @media  ${(props) => props.theme.device.tablet},
            ${(props) => props.theme.device.mobile}{
        height:auto;
        padding:50px 0;
      }


`;

export const SectionIn = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || "40px 20px"};
  background: ${({ bg }) => bg || "none"};
  box-sizing: border-box;

  @media ${(props) => props.theme.device.tablet},
         ${(props) => props.theme.device.mobile}{
    width:94%;
  }
`;
