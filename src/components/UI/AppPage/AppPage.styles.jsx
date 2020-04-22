import styled, {css} from 'styled-components';
import colorWithOpacity from '../../../modules/helpers/colorWithOpacity/colorWithOpacity';

export const Styles = styled.div`
  padding: 2rem;
  border: 1px solid ${({theme}) => theme.textColorPrimary};
  box-shadow: 3px 3px 5px ${({theme}) => colorWithOpacity(theme.textColorPrimary, 50)};
  border-radius: 2.5rem;

  ${props =>
    css`
      ${props.css}
    `};
`;
