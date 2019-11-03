import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Residencia from '../pages/Residencia';
import Comodo from '../pages/Comodo';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" component={Profile} />
      <Route path="/residencia" component={Residencia} />
      <Route path="/comodo" component={Comodo} />
    </Switch>
  );
}
