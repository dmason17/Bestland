import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import './header.css';

const deps = Object.assign({}, dependencies, devDependencies);

class Header extends Component {
  render() {
    return (
      <Headroom style={{
          background: 'rgb(57, 111, 176)',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
          height: "75px",
          marginTop: "0px",
          opacity: "0.75"}}>
        <div style={{height: "15px", width: "100%"}}/>
        <div style={{height: "60px", float: "left"}}>
          <h1 style={{margin: 0,color: 'rgb(252, 253, 254)',}}>
            <a href="#/">
              <img src="https://www.georgiadoodle.com/wp-content/uploads/2015/07/logo_retina.png"
              style={{height: "60px", marginTop: "0px"}}/>
            </a>
          </h1>
        </div>
        <div style={{height: "60px", float: "right"}}>
          <h1 style={{margin: 0, marginLeft: "15px",marginRight: "15px", color: '#9ccede',}}>
            Contact
          </h1>
        </div>
        <div style={{height: "60px", float: "right"}}>
          <h1 style={{margin: 0,marginLeft: "15px", color: '#80b6d3',borderRight: "3px solid #80b6d3",
          paddingRight: "15px"}}>
            <Link to='/OurDogs'>Our Dogs</Link>
          </h1>
        </div>
        <div style={{height: "60px", float: "right"}}>
          <h1 style={{margin: 0,color: '#b197ba', borderRight: "3px solid #b197ba",
          paddingRight: "15px"}}>
            <Link to='/'>Home</Link>
          </h1>
        </div>
      </Headroom>
    );
  }
}

export default Header;
