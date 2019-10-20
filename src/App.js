import React, {Component } from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import URLForm from './Components/URLForm/URLForm';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Fetcher from './Containers/Fetcher/Fetcher'

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
      videoUrl: '',
      fetching: false,
      data: {},
    }
  };

  onInputChange = (event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({videoUrl:this.state.input, fetching: true});
    let that = this;
    fetch(`http://localhost:4000/info?url=${this.state.input}`).then((response)=>response.json())
        .then((data)=>{
                console.log(data);
                that.setState({data:data,
                fetching: false});
        });
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"
                params={particlesOptions} />
        <Logo />
        <URLForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Fetcher data={this.state.data} fetching={this.state.fetching} />
        
        
      </div>
    );
  }
}

export default App;
