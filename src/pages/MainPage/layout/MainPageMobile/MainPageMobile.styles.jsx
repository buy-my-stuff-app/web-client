import styled from 'styled-components';

export const Styles = styled.div`
  background-color: ${({theme}) => theme.bgColorPrimary};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
