import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, withRouter
} from 'react-router-dom';
import 'babel-polyfill';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/scss/bootstrap.scss';
import { library } from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/fontawesome-free-solid';

import App from './App';
import UsersPage from './users';
import BooksPage from './books';
import './main.scss';

import Navigation from './navigation';

library.add(faStroopwafel, faUser, fab);

const BasicExample = () => {
  const NavigationBar = withRouter(props => <Navigation {...props} />);
  return (
    <Router>
      <div>
        <NavigationBar />
        <Route exact path="/" component={App} />
        <Route path="/users/:email?" component={UsersPage} />
        <Route path="/books/:book?" component={BooksPage} />
      </div>
    </Router>
  );
};

ReactDOM.render(<BasicExample />, document.getElementById('root'));
