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
        hyperlinkPanelOpen: false,
      };
      this.handleWheel = this.handleWheel.bind(this);
      this.handleDownloadPDF = this.handleDownloadPDF.bind(this);
      this.handleAddHyperlink = this.handleAddHyperlink.bind(this);
      this.handleHyperlinkPanel = this.handleHyperlinkPanel.bind(this);
      this.handleChooseTemplate = this.handleChooseTemplate.bind(this);
      this.handleChooseBackground = this.handleChooseBackground.bind(this);
      this.handleChooseBackgroundColor = this.handleChooseBackgroundColor.bind(this);
  }

  handleChooseTemplate(selection){
    this.setState({
      choosenTemplate: selection,
      choosenBackgroundColor:0,
      choosenBackground:0,
    })
  }

  handleChooseBackground(selection){
    this.setState({
      choosenBackground: selection,
      choosenBackgroundColor:0,
    })
  }

  handleChooseBackgroundColor(selection){
    this.setState({
      choosenBackgroundColor: selection,
      choosenBackground:0,
    })
  }

  handleDownloadPDF(){
    document.getElementById("capture").setAttribute('style','transorm:scale("1")');
    this.resume.save();
  }

  handleHyperlinkPanel(){
    this.setState({
      hyperlinkPanelOpen:!this.state.hyperlinkPanelOpen,
    });
  }

  handleAddHyperlink(e){
    var parentEl = null,sel;
    if (window.getSelection().type!=='None'){
      this.setState({
        hyperlinkPanelOpen: true,
      });
      sel = window.getSelection();
          if (sel.rangeCount) {
              parentEl = sel.getRangeAt(0).commonAncestorContainer;
              if (parentEl.nodeType !== 1) {
                  parentEl = parentEl.parentNode;
              }
          }
      var pos = parentEl.innerHTML.search(sel.toString());
      if(pos!==-1){
        const before = parentEl.innerHTML.slice(0,pos);
        const after = parentEl.innerHTML.slice(pos+sel.toString().length);
        const oldString = parentEl.innerHTML.slice(pos,pos+sel.toString().length);
        const hyperlinkInput = document.querySelector('input.hyperlink-input').value;
        const hyperlink = `<a href="https://${hyperlinkInput}">${oldString}</a>`;
        const newString = before+hyperlink+after;
        parentEl.innerHTML = newString;
      }
      }

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
        onClickAddLink = {this.handleHyperlinkPanel}
        />
      <NavbarLeft
        handleChooseTemplate = {this.handleChooseTemplate}
        handleChooseBackground = {this.handleChooseBackground}
        handleChooseBackgroundColor = {this.handleChooseBackgroundColor}
      />

<div className={this.state.hyperlinkPanelOpen ? "hyperlink-panel-open" : "hyperlink-panel-close"}>
        <button className='close-button' onClick={() => {
          this.setState({
            hyperlinkPanelOpen: false,
          });
        }} > X </button>
        <div>Select text and enter hyperlink</div>
        <input className='hyperlink-input'></input>
        <button className='submit-button' onClick={this.handleAddHyperlink}>Add link to selection</button>
      </div>


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
        <div className={cvTemplateClass} >
          <div className='template-background' style={this.state.choosenBackground !== 0? { 'backgroundImage': `url(${this.state.choosenBackground})`}:{} || this.state.choosenBackgroundColor !== 0? { 'backgroundColor': this.state.choosenBackgroundColor}:{}  }>
          </div>


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

