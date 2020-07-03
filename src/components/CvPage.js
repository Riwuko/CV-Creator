import React, {Component} from 'react';
import data from '../data.json'

/* components */
import EditableText from './EditableText';

export default class CvPage extends Component{

    generateContactInfo(){
        const email = "Email: "+data["contactInfo"]["email"];
        const phone = "Phone: "+data["contactInfo"]["phone"];
        const github = "Github: "+data["contactInfo"]["github"];
        return(
        <table>
        <tr><EditableText value={email}/></tr>
        <tr><EditableText value={phone}/></tr>
        <tr><EditableText value={github}/></tr>
        </table>
        );
    }

    generatePersonalInfo(){
        const description = data["personalInfo"]["text"];
        return(
            <EditableText value={description}/>
        );
    }

    generateAcademicInfo(){
        return(
            <table>
            <tr>
                <td className="dates-range"><EditableText value={data["academicInfo"]["1"]["dates"]}/></td>
                <td><EditableText value={data["academicInfo"]["1"]["school"]}/></td>
            </tr>
            <tr>
                <td className="dates-range"><EditableText value={data["academicInfo"]["0"]["dates"]}/></td>
                <td><EditableText value={data["academicInfo"]["0"]["school"]}/></td>
            </tr>
        </table>
        );
    }

    generateWorkInfo(){
        return(
            <table>
                <tr>
                    <td className="dates-range"><EditableText value={data["workInfo"]["0"]["dates"]}/></td>
                    <td><EditableText value={data["workInfo"]["0"]["work"]}/></td>
                </tr>
                <tr>
                    <td className="dates-range"><EditableText value={data["workInfo"]["1"]["dates"]}/></td>
                    <td><EditableText value={data["workInfo"]["1"]["work"]}/></td>
                </tr>
            </table>
        );
    }

    generateProjectsInfo(){
        return(
            <table>
                <div className="single-project">
                <tr className="project-title">
                <EditableText value={data["projects"]["0"]["title"]} />
                </tr>
                <tr className="project-description">
                <EditableText value={data["projects"]["0"]["description"]} />
                </tr>
                <tr className="project-technologies">
                <EditableText value={data["projects"]["0"]["technologies"]} />
                </tr>
                </div>
                <div className="single-project">
                <tr className="project-title">
                <EditableText value={data["projects"]["1"]["title"]} />
                </tr>
                <tr className="project-description">
                <EditableText value={data["projects"]["1"]["description"]} />
                </tr>
                <tr className="project-technologies">
                <EditableText value={data["projects"]["1"]["technologies"]} />
                </tr>
                </div>
                <div className="single-project">
                <tr className="project-title">
                <EditableText value={data["projects"]["2"]["title"]} />
                </tr>
                <tr className="project-description">
                <EditableText value={data["projects"]["2"]["description"]} />
                </tr>
                <tr className="project-technologies">
                <EditableText value={data["projects"]["2"]["technologies"]} />
                </tr>
                </div>
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
                        {this.generateWorkInfo()}
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
                        {this.generateProjectsInfo()}
            </div>
            </div>
        );
    }

    generateScheme2(){
        return(
            <div>
                <section className='table'>
                    <div className='table-left-col'>
                        <div className='personal-data-item'>
                            <h3><EditableText value="Work experience"/></h3>
                        </div>
                        <div className='personal-data-item'>
                            <h3><EditableText value="Work experience"/></h3>
                        </div>
                        <div className='personal-data-item'>
                            <h3><EditableText value="Work experience"/></h3>
                        </div>
                        <div className='personal-data-item'>
                            <h3><EditableText value="Work experience"/></h3>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    render(){
        const choosenTemplate = this.props.choosenTemplate;
        var choosenFunction = '';
        switch (choosenTemplate){
            case 'item1':
                choosenFunction=this.generateScheme1();
                break;
            case 'item2':
                choosenFunction=this.generateScheme2();
                break;
            case 'item3':
                choosenFunction=this.generateScheme2();
                break;
            case 'item4':
                choosenFunction=this.generateScheme2();
                break;
        }

        return(
            <div >
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