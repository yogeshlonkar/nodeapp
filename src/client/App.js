import React from 'react';
import './app.scss';

const PackageList = ({ dependencies, heading, className }) => {
  if (!dependencies) {
    return '';
  }
  const packages = Object.keys(dependencies).map(key => (
    <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
      {key}
      <span className="badge badge-primary badge-pill">{dependencies[key]}</span>
    </li>
  ));
  return (
    <div className={className}>
      <h1 className="text-secondary">{heading}</h1>
      <ul className="list-group">
        {packages}
      </ul>
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packageJson: {}
    };
  }

  componentDidMount() {
    fetch('/api/packages')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(data => this.setState({ packageJson: data }));
  }

  render() {
    const { packageJson } = this.state;
    return (
      <div className="container home-section">
        <div className="row justify-content-start">
          <div className="col col-sm-12">
            <h1 className="display-3">React/Express sample application</h1>
            <p>This is sample application writtern using below packages</p>
          </div>
          <div className="col col-sm-12 d-flex">
            <PackageList dependencies={packageJson.dependencies} heading="Dependencies" />
            <PackageList className="ml-5" dependencies={packageJson.devDependencies} heading="Dev Dependencies" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
