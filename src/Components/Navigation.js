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
                            <Link to="/vocals">VOCALS</Link>
                        </li>
                        <li>
                            <Link to="/guitar">GUITAR</Link>
                        </li>
                        <li>
                            <Link to="/bass">BASS</Link>
                        </li>
                        <li>
                            <Link to="/drums">DRUMS</Link>
                        </li>
                    </ul>
                </div>
         );
    }
}
 
export default Navigation;