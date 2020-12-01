import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import './App.css';
import Landing from './layouts/Landing';
import MemberSite from './layouts/MemberSite';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" render={props => <Landing {...props} />} />
      <Route path="/memberSite" render={props => <MemberSite {...props} />} />
      <Redirect from="/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
