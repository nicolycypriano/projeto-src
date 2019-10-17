import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

//Importar páginas
import Main from '../pages/Main/index'
import projetistaHome from '../pages/ProjetistaHome/index'
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
                <Route path="/projetistaHome" exact component={projetistaHome} />
                <Route path="/usuario" exact component={UserHome} />
                <Route path="/usuario/perfil" exact component={UserPerfil} />
                <Route path="/usuario/imoveis" exact component={UserImovel} />
                <Route path="/usuario/imoveis/sala"component={UserImovelSala}
                />
            </Switch>
        </BrowserRouter>
    )
}
