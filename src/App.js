import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Precos from './componentes/Precos';
import Contato from './componentes/Contato';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route exact path='/' component={Inicio} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/precos' component={Precos} />
        <Route path='/contato' component={Contato} />

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
