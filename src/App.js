import React, {Component} from 'react';
import './styles/styles.css';
import './styles/cv-styles.css';
import { PDFExport } from '@progress/kendo-react-pdf';

/* Components */
import CvPage from './components/CvPage';
import NavbarTop from './components/NavbarTop';
import NavbarLeft from './components/NavbarLeft';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
        style:{
          zoom:0.7,
        },
        choosenTemplate: 'item1',
        choosenBackground: 0,
        choosenBackgroundColor: 0,
      };
      this.handleWheel = this.handleWheel.bind(this);
      this.handleDownloadPDF = this.handleDownloadPDF.bind(this);
      this.handleAddHyperlink = this.handleAddHyperlink.bind(this);
      this.handleChooseTemplate = this.handleChooseTemplate.bind(this);
      this.handleChooseBackground = this.handleChooseBackground.bind(this);
      this.handleChooseBackgroundColor = this.handleChooseBackgroundColor.bind(this);
  }

  handleChooseTemplate(selection){
    this.setState({
      choosenTemplate: selection,
    })
  }

  handleChooseBackground(selection){
    this.setState({
      choosenBackground: selection,
    })
  }

  handleChooseBackgroundColor(selection){
    this.setState({
      choosenBackgroundColor: selection,
    })
  }

  sleep (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  handleDownloadPDF(){
    document.getElementById("capture").setAttribute('style','transorm:scale("1")');
    this.resume.save();
  }

  handleAddHyperlink(e){
    const selection = window.getSelection().toString();
    console.log(selection);
    const content = selection.innerHTML;
    console.log(content);
  }


  handleWheel(event) {
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

  const cvTemplateClass='template-'+this.state.choosenTemplate;
  return (
    <div className="App-container">
      <NavbarTop 
        onClickDownload = {this.handleDownloadPDF}
        onClickAddLink = {this.handleAddHyperlink}
        />
      <NavbarLeft
        handleChooseTemplate = {this.handleChooseTemplate}
        handleChooseBackground = {this.handleChooseBackground}
        handleChooseBackgroundColor = {this.handleChooseBackgroundColor}
      />
      <PDFExport paperSize={'Letter'}
        fileName="curriculumVitae.pdf"
        title="Curriculum Vitae"
        subject=""
        keywords=""
        ref={(r) => this.resume = r}>
        
      <div className='inner-container'onWheel={this.handleWheel} 
           style={{transform:`scale(${this.state.style.zoom})`}}
           id='capture'
       >
        <div className={cvTemplateClass}>
          <CvPage 
            choosenTemplate={this.state.choosenTemplate}
          />
         </div>
       </div>
  
      </PDFExport>

    </div>
  );
}
}

