import React from 'react';
import bandLogo from '../Assets/tool-logo.png'

class Header extends React.Component {
    constructor() {
        super();
    this.state = {  }
    };

    render() { 
        return ( 
            <div className="logo-container">
                <img className="main-logo" src={bandLogo} alt="band-logo" />
            </div>
        );
    }
}
 
export default Header;