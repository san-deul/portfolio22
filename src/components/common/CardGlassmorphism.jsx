import styled from "styled-components";

export const CardGlassmorphism = styled.div`
  position: relative;
  overflow: hidden;

  width: 360px;
  height: 240px;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border-radius: 20px;

  border: 1px solid rgba(255, 255, 255, 0.3);

  box-shadow:
     0 8px 32px rgba(0, 0, 0, 0.15),
  inset 0 1px 0 rgba(255, 255, 255, 0.45),
  inset 0 -1px 0 rgba(255, 255, 255, 0.1),
  inset 0 0 18px 2px rgba(255, 255, 255, 3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;

    top: 0;
    left: 0;

    width: 1px;
    height: 100%;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      transparent,
      rgba(255, 255, 255, 0.3)
    );
  }
`;