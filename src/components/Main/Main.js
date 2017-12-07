import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';
import Headroom from 'react-headroom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Switch, Route } from 'react-router-dom';
import { Home, OurDogs } from 'components';
import './main.css';

const deps = Object.assign({}, dependencies, devDependencies);

class Main extends Component {
  render() {
    return (
      <body className="Site">
        <main className="Site-content">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/OurDogs' component={ OurDogs }/>
          </Switch>
        </main>
        <footer style={{height: "75px", backgroundColor: "#b197ba"}}>
          <div style={{height: "30px", width: "100%"}}/>
          <div style={{height: "45px", float: "right"}}>
            <h4 style={{margin: 0, marginLeft: "15px",marginRight: "15px", color: '#9ccede',}}>
              Site Made By: Danny Mason
            </h4>
          </div>
        </footer>
      </body>
    );
  }
}

export default Main;
