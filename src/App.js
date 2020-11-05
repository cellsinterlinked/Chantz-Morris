import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Landing from './Pages/Landing';
import ForBuyers from './Pages/ForBuyers';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Inbox from './Pages/Inbox';
import ForSellers from './Pages/ForSellers';
import About from './Pages/About';
import Auth from './Pages/Auth';
import BlogPage from './Pages/BlogPage';
import { AuthContext } from './Context/auth-context';

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')); //like JSON.stringify translates a string to JSON, JSON.parse translages JSON into a javascript data structure
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;

  if (token) {
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
        <Route path="/blog/:slug" exact>
          <BlogPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App" style={{ height: '100vh' }}>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>{routes}</Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
