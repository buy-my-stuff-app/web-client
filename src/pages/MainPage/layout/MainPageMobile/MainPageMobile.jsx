import React from 'react';
import PropTypes from 'prop-types';
import {Styles} from './MainPageMobile.styles';
import Theme from '../../../../themes/Theme';
import AppPage from '../../../../components/UI/AppPage/AppPage';
import TopNav from '../../../../components/UI/TopNav/TopNav';

const MainPageMobile = ({theme}) => {
  return (
    <Styles theme={theme}>
      <AppPage TopNav={<TopNav />}>
        <p>MainPageMobile</p>
      </AppPage>
    </Styles>
  );
};

MainPageMobile.propTypes = {
  theme: PropTypes.instanceOf(Theme),
};

export default MainPageMobile;
