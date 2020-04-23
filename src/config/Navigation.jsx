import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import RememberPassword from '../pages/RememberPassword/RememberPassword';

const AuthRouter = (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path='/:product_id' component={MainPage} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
);

const GuestRouter = (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/remember-password' component={RememberPassword} />
    <Route path='/product/:product_id' component={MainPage} />
    <Route exact path='/cart' component={MainPage} />
    <Route exact path='/checkout' component={MainPage} />
    <Route exact path='/checkout-completed' component={MainPage} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
);

const Navigation = ({userLoggedId}) => {
  const isLogged = useMemo(() => !!userLoggedId, [userLoggedId]);

  if (isLogged) {
    return AuthRouter;
  }

  return GuestRouter;
};

Navigation.propTypes = {
  userLoggedId: PropTypes.string,
};

export default Navigation;
