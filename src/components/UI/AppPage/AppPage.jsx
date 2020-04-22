import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Styles} from './AppPage.styles';
import {ThemeContext} from '../../../themes/ThemeContext';

const AppPage = ({children, TopNav, BottomNav, ...props}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      {TopNav}
      <main className='AppPage__main'>{children}</main>
      {BottomNav}
    </Styles>
  );
};

AppPage.propTypes = {
  children: PropTypes.node.isRequired,
  TopNav: PropTypes.node,
  BottomNav: PropTypes.node,
};

export default AppPage;
