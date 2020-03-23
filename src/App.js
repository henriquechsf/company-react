import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route exact path='/' component={Inicio} />
        <Route path='/servicos' component={Servicos} />

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
