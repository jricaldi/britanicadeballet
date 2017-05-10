import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './views/root/Root';

const app = document.getElementById('content'); //eslint-disable-line


render(
  <AppContainer>
    <Root />
  </AppContainer>,
  app);

if (module.hot) {
  module.hot.accept('./views/root/Root', () => render(Root));
}
