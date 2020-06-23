import React, {Component} from 'react';

/* components */
import EditableText from './EditableText';

export default class CvPage extends Component{

    generateScheme1(){
        console.log("czdhcudz");
        return(
            <div>
            <section className='table'>
            <div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Work experience"/></h3>
                </div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Academic profile"/></h3>
                </div>
            </div>
            <div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Personal background"/></h3>
                </div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Contact details"/></h3>
                </div>
            </div>
            </section>
            <div className='personal-data-item'>
                <h3><EditableText value="Important projects"/></h3>
            </div>
            </div>
        );
    }

    render(){
        const choosenTemplate = this.props.choosenTemplate;
        var choosenFunction = '';
        if (choosenTemplate==='item1'){ 
            choosenFunction=this.generateScheme1();
        }
        return(
            <div id="capture">
            <header>
                <h1><EditableText value="Jan Kowalski"/></h1>
                <h2><EditableText value="Junior Web Developer"/></h2>
            </header>
            <section className='personal-data'>
               
                {choosenFunction }

            </section>
            
            </div>
        )

    }

}