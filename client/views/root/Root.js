import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Inicio from '../components/Inicio';
import QuienesSomos from '../components/QuienesSomos';
import Clases from '../components/Clases';
import Profesoras from '../components/Profesoras';
import Horarios from '../components/Horarios';
import Contacto from '../components/Contacto';
import Layout from '../components/layout/Layout';

const history = createBrowserHistory();

const Root = () =>
  <Router history={ history }>
    <Layout>
      <Route exact path="/" component={ Inicio } />
      <Route path="/quienes-somos" component={ QuienesSomos } />
      <Route path="/clases" component={ Clases } />
      <Route path="/profesoras" component={ Profesoras } />
      <Route path="/horarios" component={ Horarios } />
      <Route path="/contacto" component={ Contacto } />
    </Layout>
  </Router>;

export default Root;
