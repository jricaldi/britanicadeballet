import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Inicio from './views/components/Inicio';
import QuienesSomos from './views/components/QuienesSomos';
import Clases from './views/components/Clases';
import Profesoras from './views/components/Profesoras';
import Horarios from './views/components/Horarios';
import Contacto from './views/components/Contacto';
import Layout from './views/components/layout/Layout';

const history = createBrowserHistory();

const app = document.getElementById('content'); //eslint-disable-line


render(
  <Router history={ history }>
    <Layout>
      <Route exact path="/" component={ Inicio } />
      <Route path="/quienes-somos" component={ QuienesSomos } />
      <Route path="/clases" component={ Clases } />
      <Route path="/profesoras" component={ Profesoras } />
      <Route path="/horarios" component={ Horarios } />
      <Route path="/contacto" component={ Contacto } />
    </Layout>
  </Router>,
  app);
