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
      <PrivateRoute path="/comodo/edit/:id" exact component={props => <ComodoEditar {...props}/>} />
      <PrivateRoute path="/residencia/:idResidencia/comodo/:idComodo/atuador" exact component={props => <Atuador {...props}/>} />
      <PrivateRoute path="/residencia/:idResidencia/comodo/:idComodo/sensor" exact component={props => <Sensor {...props}/>} />
      <PrivateRoute path="/profile" exact component={props => <Profile {...props}/>} />
      <PrivateRoute path="/residencia/:id/comodo" exact component={props => <Comodo {...props}/>} />
      <PrivateRoute path="/residencia/list" exact component={props => <ListagemResidencia {...props}/>} />
      <PrivateRoute path="/residencia/edit/:id" exact component={props => <ResidenciaEditar {...props}/>} />     
      <PrivateRoute path="/residencia" exact component={props => <Residencia {...props}/>} />
      <PrivateRoute path="/componentes/residencia/:idResidencia/comodo/:idComodo/sensor/edit/:id" exact component={props => <SensorEditar {...props}/>} />
      <PrivateRoute path="/componentes/residencia/:idResidencia/comodo/:idComodo/atuador/edit/:id" exact component={props => <AtuadorEditar {...props}/>} />
      <PrivateRoute path="/comodo/list/:id" exact component={props => <ComodoList {...props} />} />
      <PrivateRoute path="/componentes/residencia/:idResidencia/comodo/:idComodo" exact component={props => <Componentes {...props}/>} />
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