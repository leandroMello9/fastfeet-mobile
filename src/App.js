import React from 'react';

import { useSelector } from 'react-redux';
import {createAppContainer} from 'react-navigation'
import createRouter from '../routes';

export default function Routes() {
  // Verificando se o usuario estar logado
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);
  const Rotas = createAppContainer(Routes)

  return <Rotas />;
}
