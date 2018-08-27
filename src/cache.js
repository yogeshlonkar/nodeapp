const NodeCache = require('node-cache');

module.exports = {
  users: new NodeCache(),
  books: new NodeCache()
};
module.exports.users.set('admin@example.com', {
  email: 'admin@example.com',
  name: 'Admin user',
  address: {
    line1: 'Lorem Ipsum',
    line2: 'consectetur adipiscing elit',
    zip: '41120',
    city: 'Obrazhiivka',
    state: 'Sumska',
    country: 'Ukrainian'
  }
});
module.exports.users.set('sample@example.com', {
  email: 'sample@example.com',
  name: 'Dummy1 Lastname',
  address: {
    line1: 'Arrondissement de Romorantin',
    zip: '41140',
    city: 'Thésée',
    state: 'Loir-et-Cher',
    country: 'France'
  }
});

module.exports.users.set('lonkar.yogeshr@gmail.com', {
  email: 'lonkar.yogeshr@gmail.com',
  name: 'Yogesh Lonkar',
  address: {
    line1: 'Something somthing',
    zip: '910114',
    city: 'Pune',
    state: 'MH',
    country: 'India'
  }
});

module.exports.books.set('The Power of your Subconscious Mind', {
  name: 'The Power of your Subconscious Mind',
  pages: 312
});

module.exports.books.set('Word Power Made Easy', {
  name: 'Word Power Made Easy',
  pages: 686
});

module.exports.books.set('The Alchemist', {
  name: 'The Alchemist',
  pages: 172
});
