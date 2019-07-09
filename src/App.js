import React from 'react';
import classes from './App.css';
import {Route,Switch} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AboutUs from './components/AboutUs/AboutUs';
import Meet from './components/Meet/Meet';
import Service from './components/Service/Service';
import Story from './components/Story/Story';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path='/contact' exact component={Contact} />
        <Route path='/story' exact component={Story} />
        <Route path='/services' exact component = {Service} />
        <Route path='/meet' exact component = {Meet} />
        <Route path='/aboutus' exact component = {AboutUs} />
        <Route path = '/' exact component = {MainPage} />
      </Switch>
    </div>
  );
}

export default App;
