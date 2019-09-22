import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

//Importar páginas
import Main from '../pages/Main/index'
import UserHome from '../pages/UserHome/index'
import UserPerfil from '../pages/UserPerfil/index'

// const Router = () => {
//     <BrowserRouter>
//         <AdminProtectedRoute exact path="/home" component={AdminHome} />
//     </BrowserRouter>
// }

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/usuario" component={UserHome} />
                <Route path="/usuario/perfil" component={UserPerfil} />
            </Switch>
        </BrowserRouter>
    )
}
