import React from 'react';
import '../Style/App.scss';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header.js';
import Navigation from '../Components/Navigation.js';
import Maynard from '../Components/Maynard.js';
import Adam from '../Components/Adam.js';
import Justin from '../Components/Justin.js';
import Danny from '../Components/Danny.js';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>

      <Switch>
        <Route path="/vocals" component={Maynard} />
        <Route path="/guitar" component={Adam} />
        <Route path="/bass" component={Justin} />
        <Route path="/drums" component={Danny} />
      </Switch>
    </div>
  );
}

export default App;
