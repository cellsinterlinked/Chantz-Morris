import React, {useState, useCallback} from 'react';
import './App.css';
import Landing from "./Pages/Landing";
import ForBuyers from './Pages/ForBuyers';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Inbox from './Pages/Inbox';
import ForSellers from './Pages/ForSellers';
import About from './Pages/About';
import Auth from './Pages/Auth';
import { AuthContext } from './Context/auth-context';




const App = () =>  {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;

  if(isLoggedIn) {
    routes = (
      <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/buyers" exact>
        <ForBuyers />
      </Route>
      <Route path="/blog" exact>
      <Blog />
      </Route>
      <Route path="/contact" exact>
      <Contact />
      </Route>
      <Route path="/inbox" exact>
      <Inbox />
      </Route>
      <Route path="/sellers" exact>
      <ForSellers />
      </Route>
      <Route path="/about" exact>
      <About />
      </Route>
      <Redirect to="/inbox" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/buyers" exact>
        <ForBuyers />
      </Route>
      <Route path="/blog" exact>
      <Blog />
      </Route>
      <Route path="/contact" exact>
      <Contact />
      </Route>
      <Route path="/sellers" exact>
      <ForSellers />
      </Route>
      <Route path="/about" exact>
      <About />
      </Route>
      <Route path="/login" exact>
      <Auth />
      </Route>
      <Redirect to="/" />
      </Switch>
    );
  }



  
  return (
    <div className="App" style={{height: "100vh"}}>
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    <Router>
      {routes}
    </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
