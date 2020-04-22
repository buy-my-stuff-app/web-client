import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppPage.styles';
import {ThemeContext} from '../../../themes/ThemeContext';

const AppPage = ({children, ...props}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      {children}
    </Styles>
  );
};

AppPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppPage;
