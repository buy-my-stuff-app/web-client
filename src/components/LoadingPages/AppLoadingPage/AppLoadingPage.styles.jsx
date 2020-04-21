import styled, { css } from "styled-components";

export const Styles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgColorPrimary};

  ._logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12.5rem;
      margin-bottom: 5rem;
    }

    &-image {
      width: 100%;
      object-fit: contain;
    }
  }

  ${props =>
    css`
      ${props.css}
    `};
`;
