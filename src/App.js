import React from 'react';
import './App.css';
import Landing from "./Pages/Landing";
import ForBuyers from './Pages/ForBuyers';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';




const App = () =>  {
  
  return (
    <div className="App" style={{height: "100vh"}}>
    <Router>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/buyers" exact>
        <ForBuyers />
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
