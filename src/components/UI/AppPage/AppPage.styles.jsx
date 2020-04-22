import styled, {css} from 'styled-components';

export const Styles = styled.div`
  .AppPage {
    &__main {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow-y: auto;
    }
  }

  ${props =>
    css`
      ${props.css}
    `};
`;
