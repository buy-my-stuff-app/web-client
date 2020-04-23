import styled, {css} from 'styled-components';

export const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.primaryColor};

  .img {
    height: 5rem;
    padding: 1rem;
    cursor: pointer;

    & > img {
      height: 100%;
      border-radius: 1rem;
    }
  }

  ${props =>
    css`
      ${props.css}
    `};
`;
