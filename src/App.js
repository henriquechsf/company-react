import React from 'react';

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Inicio />
      <Servicos />
      <Site />
      <Rodape />
    </div>
  );
}

export default App;
