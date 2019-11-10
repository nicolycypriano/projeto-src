import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Residencia from '../pages/Residencia';
import Comodo from '../pages/Comodo';
import Atuador from '../pages/Atuador';
import Sensor from '../pages/Sensor';
import Casa from '../pages/Casa';
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
      <Route path="/comodo/edit/:id" exact component={ComodoEditar} />
      <Route path="/residencia/:idResidencia/comodo/:id/atuador" exact component={Atuador} />
      <Route path="/residencia/:idResidencia/comodo/:id/sensor" exact component={Sensor} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/residencia/:id/comodo" exact component={Comodo} />
      <Route path="/residencia/list" exact component={ListagemResidencia} />
      <Route path="/residencia/edit/:id" exact component={ResidenciaEditar} />     
      <Route path="/residencia" exact component={Residencia} />
      <Route path="/sensor/edit/:id" exact component={SensorEditar} />
      <Route path="/atuador/edit/:id" exact component={AtuadorEditar} />
      <Route path="/comodo/list/:id" exact component={ComodoList} />
      <Route path="/componentes/residencia/:idResidencia/comodo/:id" exact component={Componentes} />
      <Route path="/casa" exact component={Casa} />
      <Route path="/register" exact component={SignUp} />
    </Switch>
  );
}
