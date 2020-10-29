import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';

function Routes() {
  return (
    <BrowserRouter>
      <Route  path="/" exact component={Inicio} />

    </BrowserRouter>
  )
}

export default Routes;