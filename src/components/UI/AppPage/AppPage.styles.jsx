import styled, {css} from 'styled-components';

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .AppPage {
    &__main {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }

  ${props =>
    css`
      ${props.css}
    `};
`;
