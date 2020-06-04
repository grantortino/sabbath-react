import React from 'react';
import vocals from '../Assets/vocals.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navigation extends React.Component {
    constructor() {
        super();
    }    

    render() { 
        return ( 
                <div>
                    <ul className="list-container">
                        <li>
                            <Link to="/vocals" className="link">VOCALS</Link>
                        </li>
                        <li>
                            <Link to="/guitar" className="link">GUITAR</Link>
                        </li>
                        <li>
                            <Link to="/bass" className="link">BASS</Link>
                        </li>
                        <li>
                            <Link to="/drums" className="link">DRUMS</Link>
                        </li>
                    </ul>
                </div>
         );
    }
}
 
export default Navigation;