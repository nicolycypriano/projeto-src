import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

//Importar páginas
import Main from '../pages/Main/index'
import ProjetistaHome from '../pages/ProjetistaHome/index'
import ProjetistaUsuarios from '../pages/ProjetistaUsuarios/index'
import ProjetistaUsuarioCadastro from '../pages/ProjetistaUsuarioCadastro/index'
import ProjetistaProjetos from '../pages/ProjetistaProjetos/index'
import UserHome from '../pages/UserHome/index'
import UserPerfil from '../pages/UserPerfil/index'
import UserImovel from '../pages/UserImovel'
import UserImovelSala from '../pages/UserImovelSala'


//  const Router = () => {
//      <BrowserRouter>
//      </BrowserRouter>
//  }

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/projetistaHome" exact component={ProjetistaHome} />
                <Route path="/projetistaUsuarios" exact component={ProjetistaUsuarios} />
                <Route path="/projetistaUsuarioCadastro" exact component={ProjetistaUsuarioCadastro} />
                <Route path="/projetistaProjetos" exact component={ProjetistaProjetos} />
                <Route path="/usuario" exact component={UserHome} />
                <Route path="/usuario/perfil" exact component={UserPerfil} />
                <Route path="/usuario/imoveis" exact component={UserImovel} />
                <Route path="/usuario/imoveis/sala"component={UserImovelSala} />
            </Switch>
        </BrowserRouter>
    )
}
