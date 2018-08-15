import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const Scripts = ({ scripts, className }) => {
  if (!scripts) {
    return '';
  }
  const scriptsList = Object.keys(scripts).map(key => (
    <div key={key} className="card">
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-muted">{key}</h5>
        <pre className="card-text">
          {scripts[key]}
        </pre>
      </div>
    </div>
  ));
  return (
    <div className={className}>
      <h1 className="text-secondary">Scripts</h1>
      {scriptsList}
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
            <h1 className="display-3">Sample single page application</h1>
            <p>
              This is sample SPA writtern using below packages.
              <a href="https://github.com/yogeshlonkar/nodeapp">
                <FontAwesomeIcon size="lg" color="black" icon={['fab', 'github']} />
              </a>
            </p>
          </div>
          <Scripts className="col col-sm-12" scripts={packageJson.scripts} />
          <div className="col col-sm-12">&nbsp;</div>
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
