import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageNotFound = () => (
  <div style={{ minHeight: '80vh' }} className="d-flex justify-content-center align-items-center flex-column">
    <Helmet titleTemplate="%s | Sample nodeapp">
      <title>Page not found</title>
    </Helmet>
    <div className="p-5">
      <h1 className="display-4">Sorry! The page you&#39;re looking for does not exist</h1>
    </div>
    <div className="p-5">
      <FontAwesomeIcon size="8x" color="#6c757d" icon={['far', 'frown']} />
    </div>
  </div>
);

export default PageNotFound;
