import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Styles} from './TopNav.styles';
import {ThemeContext} from '../../../themes/ThemeContext';
import logo from '../../../assets/images/logoBG.png';
import cart from '../../../assets/images/cart.png';
import hamburger from '../../../assets/images/hamburger.png';

const TopNav = ({...props}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Styles theme={theme} {...props}>
      <Link to='/' className='img'>
        <img src={hamburger} alt='Menu' />
      </Link>
      <Link to='/' className='img'>
        <img src={logo} alt='BuyMyStuffApp' />
      </Link>
      <Link to='/cart' className='img'>
        <img src={cart} alt='Cart' />
      </Link>
    </Styles>
  );
};

TopNav.propTypes = {};

export default TopNav;
