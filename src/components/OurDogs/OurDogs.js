import React, { Component } from 'react';
import { dependencies, devDependencies } from '../../../package.json';
import Flexbox from 'flexbox-react';
import './ourdogs.css';
import { Esther, Willow, Ella, GeorgiaPeach } from './ourDogsConstants.js';


const deps = Object.assign({}, dependencies, devDependencies);

class OurDogs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dog: "",
    };
  }
  handleDogClick(event){
    event.stopPropagation();
    if(this.state.dog===event.target.id){
      this.setState({
        dog: "",
      });
    }else{
      this.setState({
        dog: event.target.id,
      });
    }
  }

  render() {
    return (
      <div id="" onClick={ this.handleDogClick.bind(this) } >
      <ul class="flex-container">
        <li className={this.state.dog==="Esther" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/Esther-2-2048x1365.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Esther">
          Esther
        </li>
        <li className={this.state.dog==="Ella" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2016/01/MG_5326-2-Roos-puppies-e1451875602428.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Ella">
          Ella
        </li>
          {window.innerWidth < 1358 && window.innerWidth >= 905 &&
            (this.state.dog==="Esther" || this.state.dog==="Ella")?
          <li style={{}}  className="flex-item-text" >
            {this.state.dog==="Esther" ? <Esther/> : null}
            {this.state.dog==="Ella" ? <Ella/> : null}
          </li> : null}
        <li className={this.state.dog==="Willow" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2016/01/Marcelas-Dogs-0070-Roos-puppies-e1451876012432.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Willow">
          Willow
        </li>
          {window.innerWidth >= 1358 &&
            (this.state.dog==="Willow" || this.state.dog==="Esther" || this.state.dog==="Ella")  ?
          <li style={{}}  className="flex-item-text">
            {this.state.dog==="Esther" ? <Esther/> : null}
            {this.state.dog==="Willow" ? <Willow/> : null}
            {this.state.dog==="Ella" ? <Ella/> : null}
          </li> : null}
        <li className={this.state.dog==="Georgia Peach" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/giorgia.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Georgia Peach">
            Georgia Peach
        </li>
          {window.innerWidth < 1358 && window.innerWidth >= 905 &&
            (this.state.dog==="Willow" || this.state.dog==="Georgia Peach")?
          <li style={{}}  className="flex-item-text" >
            {this.state.dog==="Willow" ? <Willow/> : null}
            {this.state.dog==="Georgia Peach" ? <GeorgiaPeach/> : null}
          </li> : null}
        <li className={this.state.dog==="Cara" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/cara.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Cara">
          Cara
        </li>
        <li className={this.state.dog==="Ink" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/IMG_6935-Roos-puppies.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Ink">
          Ink
        </li>
        {window.innerWidth < 1358 && window.innerWidth >= 905 &&
          (this.state.dog==="Cara" || this.state.dog==="Ink")?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
        {window.innerWidth >= 1358 &&
          (this.state.dog==="Ink" || this.state.dog==="Cara" || this.state.dog==="Georgia Peach") ?
        <li style={{}}  className="flex-item-text" >
        {this.state.dog==="Georgia Peach" ? <GeorgiaPeach/> : null}
        </li> : null}
        <li className={this.state.dog==="Deja" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/IMG_6762-Roos-puppies.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Deja">
          Deja
        </li>
        <li className={this.state.dog==="Lana" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/unnamed-2.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Lana">
          Lana
        </li>
        {window.innerWidth < 1358 && window.innerWidth >= 905 &&
          (this.state.dog==="Deja" || this.state.dog==="Lana")?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
        <li className={this.state.dog==="Yella" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2015/06/unnamed-3-1.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Yella">
          Yella
        </li>
        {window.innerWidth >= 1358 &&
          (this.state.dog==="Yella" || this.state.dog==="Deja" || this.state.dog==="Lana") ?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
        <li className={this.state.dog==="Little Red" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2016/12/FullSizeRender-7-640x490.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Little Red">
          Little Red
        </li>
        {window.innerWidth < 1358 && window.innerWidth >= 905 &&
          (this.state.dog==="Yella" || this.state.dog==="Little Red")?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
        <li className={this.state.dog==="Brie" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2016/12/Brie-1.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Brie">
          Brie
        </li>
        <li className={this.state.dog==="Dolce" ? "flex-item flex-item-expand" : "flex-item"}
          style={{backgroundImage:
          "url(https://www.georgiadoodle.com/wp-content/uploads/2017/01/IMG_8635-1024x683.jpg)"}}
          onClick={ this.handleDogClick.bind(this) } id="Dolce">
          Dolce
        </li>
        {window.innerWidth < 1358 && window.innerWidth >= 905 &&
          (this.state.dog==="Brie" || this.state.dog==="Dolce")?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
        {window.innerWidth >= 1358 &&
          (this.state.dog==="Dolce" || this.state.dog==="Little Red" || this.state.dog==="Brie") ?
        <li style={{}}  className="flex-item-text" >
          Test this is about {this.state.dog}
        </li> : null}
      </ul>
      <div style={{width: "100%", height: "100px", backgroundColor: "white"}}/>
      </div>
    );
  }
}

class MyList extends Component {
  render() {
    return(
      <ul class="flex-container">
         {this.props.items.map((item ,key, onClickFunc, pic) =>
           <li key={key} className="flex-item"
             style={{backgroundImage:{pic}}}
             onClick={ this.handleDogClick} id={item}>
             {item}
           </li>
          )}
      </ul>
    )
  }
}

export default OurDogs;
