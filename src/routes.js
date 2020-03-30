import React from 'react'
import { Route } from 'react-router-dom'

import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Precos from './componentes/Precos';
import Contato from './componentes/Contato';

// Area Administrativa
import Admin from './admin/Admin';
import Login from './admin/Login';

function Routes() {
    return (
        <>
            <Route exact path='/' component={Inicio} />
            <Route path='/servicos' component={Servicos} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/precos' component={Precos} />
            <Route path='/contato' component={Contato} />

            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
        </>
    )
}

export default Routes;