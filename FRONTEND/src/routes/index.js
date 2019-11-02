import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import UserHome from '../pages/UserHome';
import Profile from '../pages/Profile';
import ProjetistaHome from '../pages/ProjetistaHome';
import ProjetistaUsuarios from '../pages/ProjetistaUsuarios';
import ProjetistaUsuarioCadastro from '../pages/ProjetistaUsuarioCadastro';
import ProjetistaProjetos from '../pages/ProjetistaProjetos';
import UserPerfil from '../pages/UserPerfil';
import UserImovel from '../pages/UserImovel';
import UserImovelSala from '../pages/UserImovelSala';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />

        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/profile" exact component={Profile} isPrivate />
        <Route path="/projetistaHome" exact component={ProjetistaHome} />
        <Route
          path="/projetistaUsuarios"
          exact
          component={ProjetistaUsuarios}
        />
        <Route
          path="/projetistaUsuarioCadastro"
          exact
          component={ProjetistaUsuarioCadastro}
        />
        <Route
          path="/projetistaProjetos"
          exact
          component={ProjetistaProjetos}
        />
        <Route path="/usuario" exact component={UserHome} />
        <Route path="/usuario/perfil" exact component={UserPerfil} />
        <Route path="/usuario/imoveis" exact component={UserImovel} isPrivate />
        <Route path="/usuario/imoveis/sala" exact component={UserImovelSala} />
      </Switch>
    </BrowserRouter>
  );
}
