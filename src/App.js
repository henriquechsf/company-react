import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <Routes />
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
