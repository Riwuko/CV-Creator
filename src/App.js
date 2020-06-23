import React, {Component} from 'react';
import './styles/styles.css';

/* Components */
import CvPage from './components/CvPage';
import NavbarTop from './components/NavbarTop';
import NavbarLeft from './components/NavbarLeft';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
        style:{
          zoom:1,
        }
      };
      this.handleWheel = this.handleWheel.bind(this);
  }


  handleWheel(event) {
    console.log(event.deltaY);

    if (event.deltaY > 0) {
      this.setState({
        style:{
          zoom: this.state.style.zoom / 1.01
        }
      });
    }
    if (event.deltaY < 0) {
      this.setState({
        style:{
          zoom: this.state.style.zoom * 1.01
        }
      });
    }

  }

render(){
  return (
    <div className="App-container">
      <NavbarTop />
      <NavbarLeft />
      <div className='inner-container' onWheel={this.handleWheel} style={{transform:`scale(${this.state.style.zoom})`}}>
      <CvPage />
      </div>
    </div>
  );
}
}

