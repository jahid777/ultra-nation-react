import React from 'react';
import Home from './Components/Country/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDtls from './Components/CountryDtls/CountryDtls';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/country/:countryName'>
          <CountryDtls></CountryDtls>
        </Route>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;