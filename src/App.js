import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './Pages/Landing';
import ForBuyers from './Pages/ForBuyers';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import ForSellers from './Pages/ForSellers';
import About from './Pages/About';
import BlogPage from './Pages/BlogPage';
import Survey from './Pages/Survey';
import Services from './Pages/Services';
import Local from './Pages/Local';


const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/checklist" exact>
        <Survey />
      </Route>
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
      <Route path="/services" exact>
        <Services />
      </Route>
      <Route path="/local" exact>
        <Local />
      </Route>
      <Route path="/blog/:slug" exact>
        <BlogPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
