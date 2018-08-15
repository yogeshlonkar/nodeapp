import React from 'react';
import './users.scss';

export default class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, (form) => {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
    this.setState({user: {}});
  }

  render() {
    return (
      <div className="container users-page">
        <div className="row justify-content-start">
          <div className="col col-sm-12">
            <h1 className="display-6">Manage users</h1>
          </div>
          <div className="col col-sm-12 d-flex">
            <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input required type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="sample@example.com" />
                <div className="invalid-feedback">
                  Please provide email address.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" className="form-control" id="name" placeholder="First Last" />
                <div className="invalid-feedback">
                  Please provide name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="line1">Address</label>
                <input type="text" className="form-control" id="line1" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label htmlFor="line2">Address 2</label>
                <input type="text" className="form-control" id="line2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder="411019" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="city">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Sacramento" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="state">State</label>
                  <input type="text" className="form-control" id="state" placeholder="CA" />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="country">Country</label>
                  <input required type="text" className="form-control" id="country" placeholder="USA" />
                  <div className="invalid-feedback">
                    Please provide country.
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
