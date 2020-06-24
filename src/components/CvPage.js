import React, {Component} from 'react';

/* components */
import EditableText from './EditableText';

export default class CvPage extends Component{

    generateContactInfo(){
        return(
        <table>
        <tr><EditableText value="Email: jankowalski@gmail.com"/></tr>
        <tr><EditableText value="Phone: 123 321 000"/></tr>
        <tr><EditableText value="Github: janek.github.com"/></tr>
        </table>
        );
    }

    generatePersonalInfo(){
        return(
            <EditableText value="I'm junior Web Developer at the beginning of my IT career. I like blablabla and other blablabla."/>
        );
    }

    generateAcademicInfo(){
        return(
            <table>
            <tr>
                <td><EditableText value="2018 - now"/></td>
                <td><EditableText value="Poznan University of Technology, Computer Science"/></td>
            </tr>
            <tr>
                <td><EditableText value="2012 - 2016"/></td>
                <td><EditableText value="Leon Wyczolkowski Art School"/></td>
            </tr>
        </table>
        );
    }

    generateScheme1(){
        return(
            <div >
            <section className='table'>
            <div className='table-left-col'>
                <div className='personal-data-item'>
                    <h3><EditableText value="Work experience"/></h3>
                </div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Academic profile"/></h3>
                        {this.generateAcademicInfo()}
                </div>
            </div>
            <div className='table-right-col'>
                <div className='personal-data-item'>
                    <h3><EditableText value="Personal background"/></h3>
                        {this.generatePersonalInfo()}
                </div>
                <div className='personal-data-item'>
                    <h3><EditableText value="Contact details"/></h3>
                        {this.generateContactInfo()}
                </div>
            </div>
            </section>
            <div className='personal-data-item-external'>
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
            <div>
            <header>
                <h1><EditableText value="JAN KOWALSKI"/></h1>
                <h2><EditableText value="Junior Web Developer"/></h2>
            </header>
            <section className='personal-data'>
               
                {choosenFunction }

            </section>
            
            </div>
        )

    }

}