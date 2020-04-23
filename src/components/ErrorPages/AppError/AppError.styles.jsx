import styled, { css } from "styled-components";

export const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .AppError {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.bgColorPrimary};

    &__errorIcon {
      color: ${({ theme }) => theme.error};
      font-size: 5.4rem;
      margin: 2rem;
    }

    &__errorMessage {
      text-align: center;
      font-size: 2.4rem;
      margin: 2rem;
      color: ${theme => theme.textColorPrimary};
    }
  }

  ${props =>
    css`
      ${props.css}
    `};
`;
