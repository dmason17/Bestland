import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';
import ScrollAnimation from 'react-animate-on-scroll';
import rightArrow from 'images/rightArrow.png';
import mountains from 'images/test.jpg';
import { Redirect } from 'react-router';
import { Parallax } from 'react-parallax';


import './animate.css';
import './home.css';


const deps = Object.assign({}, dependencies, devDependencies);

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false,
    };
  }

  handleClick(){
    this.setState({
      redirect: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/OurDogs" />;
    }
    return (
        <div >
        <Parallax bgImage={mountains} strength={500}>
          <div style={{height: "500px"}}>
            <img src="https://www.georgiadoodle.com/wp-content/uploads/2015/07/logo_retina.png"
            style={{height: "20vw", marginTop: "10%", marginLeft: "7vw"}}/>
          </div>
        </Parallax>
          <div style={{width: "100vw", height: "40vw",
           verticalAlign: "middle", textAlign: "center"}}>
              <div className="divContainer" style={{backgroundColor: "#9ccede", width: "100%", height: "100%", position: "relative"}}>
              <img src="https://www.georgiadoodle.com/wp-content/uploads/2015/06/Final-deliver-0314.jpg"
              className="pic" />
                <div className="testText" style={{height: "100%", float: "right"}} onClick={this.handleClick.bind(this)}>
                 <div style={{transform: "translateY(700%)"}}>
                  Our Dogs
                  <img className="rightArrow" src={rightArrow}/>
                 </div>
                </div>
              </div>
          </div>
          <div style={{backgroundColor: "#b197ba",width: "100vw", height: "40vw",
           verticalAlign: "middle", textAlign: "center"}}>
              <div className="divContainer" style={{backgroundColor: "#80b6d3", width: "100%", height: "100%", position: "relative"}}>
                <img src="https://www.georgiadoodle.com/wp-content/uploads/2015/06/Esther-2.jpg"
                className="pic"/>
                <div className="testText" style={{height: "100%", float: "right"}} >
                 <div style={{transform: "translateY(700%)"}}>
                  Our Lifestyle
                  <img className="rightArrow" src={rightArrow}/>
                 </div>
                </div>
              </div>
          </div>
          <div style={{backgroundColor: "#b197ba",width: "100vw", height: "40vw",
           verticalAlign: "middle", textAlign: "center"}}>
              <div className="divContainer" style={{backgroundColor: "#17547f", width: "100%", height: "100%", position: "relative"}}>
                <img src="https://www.georgiadoodle.com/wp-content/uploads/2015/06/Final-deliver-0299.jpg"
                className="pic"/>
              <div className="testText" style={{height: "100%", float: "right"}} >
               <div style={{transform: "translateY(700%)"}}>
                Your Puppy
                <img className="rightArrow" src={rightArrow}/>
               </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
