import styled from "styled-components";

/**
 * 공용 섹션 레이아웃 컴포넌트
 * Section: 전체 섹션 단위
 * SectionIn: 섹션 내부 컨테이너 (중앙 정렬 + 최대 너비)
 */

export const Section = styled.section`

  scroll-margin-top: 70px;
  width: 100%;
  /* min-height: 100vh; */
  height:auto;
  position: relative;

    @media  ${(props) => props.theme.device.tablet},
            ${(props) => props.theme.device.mobile}{
        height:auto;
        padding:3.125rem 0;
      }
  
  padding:70px;

`;

export const SectionIn = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ padding }) => padding || "2.5rem 1.25rem"};
  background: ${({ bg }) => bg || "none"};
  box-sizing: border-box;

    ${({ variant }) =>
    variant === "backend" &&
    `
     background:white
    `}

  @media ${(props) => props.theme.device.tablet},
         ${(props) => props.theme.device.mobile}{
    width:94%;
  }
`;
