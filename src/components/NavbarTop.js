import React, {Component} from 'react';
import Logo from '../styles/img/logo.png';
import Link from '../styles/img/link.png';
import PDF from '../styles/img/pdf.png';

export default class NavbarTop extends Component{



    render(){

        return(
            <nav className='navbar-top-container'>
                <img src={Logo} alt="Curriculum Vitae Creator" />
                    <div>
                    <button onClick={this.props.onClickAddLink}>
                        <img src={Link} className='icon' />Add hyperlink
                    </button>
                     </div>
                    <div>
                        <button onClick={this.props.onClickDownload}>
                            <img src={PDF} className='icon' />
                            Download PDF
                        </button>
                    </div>
            </nav>
        )

    }

}