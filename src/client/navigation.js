import React from 'react';
import { Link } from 'react-router-dom';
import Yogi from './yogi.jpg';

export default class Navigation extends React.Component {
  activeClass(path) {
    const { location } = this.props;
    if (path === location.pathname) {
      return 'active';
    }
    return '';
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={Yogi} width="30" height="30" className="d-inline-block align-top" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${this.activeClass('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${this.activeClass('/users')}`} to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${this.activeClass('/books')}`} to="/books">books</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
