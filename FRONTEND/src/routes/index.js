import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Residencia from '../pages/Residencia';
import Comodo from '../pages/Comodo';
import Atuador from '../pages/Atuador';
import Sensor from '../pages/Sensor';
import Profile from '../pages/Profile';
import ListagemResidencia from '../pages/ListagemResidencia';
import ComodoList from '~/pages/ComodoList';
import Componentes from '../pages/Componentes';
import SensorEditar from '../pages/SensorEditar'
import AtuadorEditar from '../pages/AtuadorEditar'
import ResidenciaEditar from '../pages/ResidenciaEditar'
import ComodoEditar from '../pages/ComodoEditar'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/comodo/edit/:id" exact component={ComodoEditar} />
      <Route path="/residencia/:idResidencia/comodo/:idComodo/atuador" exact component={Atuador} />
      <Route path="/residencia/:idResidencia/comodo/:idComodo/sensor" exact component={Sensor} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/residencia/:id/comodo" exact component={Comodo} />
      <Route path="/residencia/list" exact component={ListagemResidencia} />
      <Route path="/residencia/edit/:id" exact component={ResidenciaEditar} />     
      <Route path="/residencia" exact component={Residencia} />
      <Route path="/componentes/residencia/:idResidencia/comodo/:idComodo/sensor/edit/:id" exact component={SensorEditar} />
      <Route path="/componentes/residencia/:idResidencia/comodo/:idComodo/atuador/edit/:id" exact component={AtuadorEditar} />
      <Route path="/comodo/list/:id" exact component={ComodoList} />
      <Route path="/componentes/residencia/:idResidencia/comodo/:idComodo" exact component={Componentes} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);