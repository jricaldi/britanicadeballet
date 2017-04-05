import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Inicio from './views/Inicio';
import QuienesSomos from './views/QuienesSomos';
import Clases from './views/Clases';
import Profesoras from './views/Profesoras';
import Horarios from './views/Horarios';
import Contacto from './views/Contacto';

const history = createBrowserHistory();

const app = document.getElementById('content'); //eslint-disable-line


render(
  <Router history={ history }>
    <div>
      <Route path="/" component={ Inicio } />
      <Route path="/quienes-somos" component={ QuienesSomos } />
      <Route path="/clases" component={ Clases } />
      <Route path="/profesoras" component={ Profesoras } />
      <Route path="/horarios" component={ Horarios } />
      <Route path="/contacto" component={ Contacto } />
    </div>
  </Router>,
  app);
