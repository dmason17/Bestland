import 'styles/app.scss';

import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';

import { App } from 'components';

const routes = (
  <Router>
    <App/>
  </Router>
);

const outlet = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      {routes}
    </AppContainer>,
    outlet
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(render);
}
