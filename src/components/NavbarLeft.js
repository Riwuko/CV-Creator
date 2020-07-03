import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { CirclePicker } from 'react-color';
import registry from '../registry.json';

// list of items
const templatesList = [
    { name: 'item1' , value: 'item1'},
    { name: 'item2' , value: 'item2'},
    { name: 'item3' , value: 'item3'},
    { name: 'item4' , value: 'item4'},
  ];


  const MenuItem = ({ text, selected }) => {
    return (
      <div
        className="menu-item"
      >
        {text}
      </div>
    );
  };
  
  export const Menu = (list) => list.map(el => {
    const { name,value } = el;
    var properText=name;
    if(value.includes("jpg")||value.includes("png")){ 
      properText=<div style={{ 'height':100, 'width':100, 'backgroundImage': `url(${value})`,'backgroundSize':150 }}>
      </div>;
    }

    return (
      <MenuItem
        text={properText}
        key={value}
      />
    );
  });
  
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default class NavbarLeft extends Component{

    constructor(){
        super()
        this.state = {
            selectedTemplate: 0,
            selectedBackground: 0,
            selectedBackgroundColor:0,
        };
    }

    onSelectTemplate = key => {
        this.setState({
            selectedTemplate: key,
        });
        this.props.handleChooseTemplate(key);
    }

    onSelectBackground = key => {
        this.setState({
            selectedBackground: key,
        });
        this.props.handleChooseBackground(key);
    }

    onSelectBackgroundColor = (color) => {
        this.setState({
            selectedBackgroundColor: color.hex, 
        });
        this.props.handleChooseBackgroundColor(color.hex);
        
    }

    generateScrollMenu(data, selected, onSelect){
        return(
        <ScrollMenu
        className='scroll-menu'
        data={data}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={onSelect}
    />
        );
    }



    generateBackgroundImages(){
      const imagesFiles=[]
      for (var x in registry){
        const imageName = registry[x];
        const file =require('../styles/img/bck/'+imageName);
        imagesFiles.push({name:`${file.slice(27,-6)}`, value:`${file}`});
    }
    
    return imagesFiles;
    }

    render(){
        const { selectedTemplate } = this.state.selectedTemplate;
        const templateMenu = Menu(templatesList, selectedTemplate);

        const backgroundsList = this.generateBackgroundImages();
        const { selectedBackground } = this.state.selectedBackground;
        const backgroundMenu = Menu(backgroundsList, selectedBackground);

        return(
            <nav className='navbar-left-container'>
                <div className='scroll-menu-label'>
                    <label>Create your style!</label>
                </div>
                <div className='horizontal-scroll-container'>
                    {this.generateScrollMenu(templateMenu,selectedTemplate,this.onSelectTemplate)}
                </div>
                <div className='horizontal-scroll-container'>
                    {this.generateScrollMenu(backgroundMenu, selectedBackground, this.onSelectBackground)}
                </div>
                <div className='color-picker-container'>
                  <CirclePicker
                    color={ this.state.selectedBackgroundColor}
                    onChangeComplete={this.onSelectBackgroundColor}
                    colors={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39","#fef3bd", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#fff","#c4def6",'#ccc',"#607d8b","#434d52","#000","#d1f1b0","#d7edfc","#fac44c","#fff5a9","#8fff84","#7ec3c6"]}
                    />
                </div>
            </nav>
        )

    }

}