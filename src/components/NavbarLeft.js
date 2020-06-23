import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
const templatesList = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
  ];

const backgroundsList = [
    { name: 'background1'},
    { name: 'background2'},
    { name: 'background3'},
    { name: 'background4'},
];

const backgroundColorsList = [
    { name: 'bckColor1'},
    { name: 'bckColor2'},
    { name: 'bckColor3'},
    { name: 'bckColor4'},
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
    const { name } = el;
  
    return (
      <MenuItem
        text={name}
        key={name}
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

    onSelectBackgroundColor = key => {
        this.setState({
            selectedBackgroundColor: key,
        });
        this.props.handleChooseBackgroundColor(key);
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

    render(){
        const { selectedTemplate } = this.state.selectedTemplate;
        const templateMenu = Menu(templatesList, selectedTemplate);

        const { selectedBackground } = this.state.selectedBackground;
        const backgroundMenu = Menu(backgroundsList, selectedBackground);

        const { selectedBackgroundColor } = this.state.selectedBackgroundColor;
        const backgroundColorMenu = Menu(backgroundColorsList, selectedBackgroundColor);

        return(
            <nav className='navbar-left-container'>
                <div className='scroll-menu-label'>
                    <label>Choose template</label>
                </div>
                <div className='horizontal-scroll-container'>
                    {this.generateScrollMenu(templateMenu,selectedTemplate,this.onSelectTemplate)}
                </div>
                <div className='horizontal-scroll-container'>
                    {this.generateScrollMenu(backgroundMenu, selectedBackground, this.onSelectBackground)}
                </div>
                <div className='horizontal-scroll-container'>
                    {this.generateScrollMenu(backgroundColorMenu, selectedBackgroundColor, this.onSelectBackgroundColor)}
                </div>
            </nav>
        )

    }

}