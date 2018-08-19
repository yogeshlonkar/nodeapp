import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'babel-polyfill';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/scss/bootstrap.scss';
import { library } from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import far from '@fortawesome/fontawesome-free-regular';

import App from './App';
import UsersPage from './users';
import BooksPage from './books';
import './main.scss';
import SideBar, { SidebarToggle } from './components/sidebar';
import PageNotFound from './components/pagenotfound';

library.add(faStroopwafel, faUser, fab, far);


class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ''
    };
  }

  setHeader = (header1) => {
    console.info('header ->', header1);
    this.setState({ header: header1 });
  }

  render = () => {
    const { header } = this.state;
    return (
      <Router>
        <div className="nodeapp-wrapper">
          <Helmet titleTemplate="%s | Sample nodeapp">
            <title>Home</title>
          </Helmet>
          <SideBar />
          <div className="w-100 mb-3">
            <nav className="navbar navbar-dark bg-dark justify-content-start mb-3">
              <SidebarToggle />
              <div style={{ marginLeft: '27px' }} className="text-white">
                {header}
              </div>
            </nav>
            <Switch>
              <Route exact path="/" render={props => <App {...props} routeHeader={this.setHeader} />} />
              <Route path="/users/:email?" render={props => <UsersPage {...props} routeHeader={this.setHeader} />} />
              <Route path="/books/:book?" render={props => <BooksPage {...props} routeHeader={this.setHeader} />} />
              <Route render={props => <PageNotFound {...props} routeHeader={this.setHeader} />} />
            </Switch>
            <footer className="mt-2 text-center font-weight-light">
              some awesome footer with copyright and privacy declaration.
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('root'));
