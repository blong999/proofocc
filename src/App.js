import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Notes, Calc } from "./components";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/notes" exact component={() => <Notes />} />
          <Route path="/calc" exact component={() => <Calc />} />
        </Switch>
        <Footer />
        <AmplifySignOut />
      </Router>
    </div>
  );
}

export default withAuthenticator(App);