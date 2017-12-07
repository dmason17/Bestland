import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';
import { Header, Main } from 'components';


const deps = Object.assign({}, dependencies, devDependencies);

class App extends Component {
  render() {
    return (
          <div>
            <Header/>
            <Main/>
          </div>
    );
  }
}

export default App;
