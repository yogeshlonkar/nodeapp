import React from 'react';
import { withRouter } from 'react-router-dom';
import { Base64 } from 'js-base64';

class BookList extends React.Component {
  getBooks = () => {
    const { history } = this.props;
    let { books } = this.props;
    books = books.map((book, index) => (
      <tr key={book.name} style={{ cursor: 'pointer' }} onClick={() => history.push(`/books/${Base64.encode(book.name)}`)}>
        <th scope="row">{index + 1}</th>
        <td>{book.name}</td>
        <td>{book.pages}</td>
      </tr>
    ));
    return (
      <tbody>
        {books}
      </tbody>
    );
  }

  render = () => (
    <div>
      <table className="table bg-white">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Pages</th>
          </tr>
        </thead>
        {this.getBooks()}
      </table>
    </div>
  )
}

export default withRouter(BookList);
