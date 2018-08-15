const express = require('express');
const { Validator } = require('jsonschema');
const { books: booksCache } = require('../cache');

const router = express.Router();
const validator = new Validator();
const bookSchema = {
  id: '/book',
  type: 'object',
  properties: {
    id: {
      ype: 'integer',
      minimum: 0
    },
    name: { type: 'string' },
    pages: {
      type: 'integer',
      minimum: 0
    }
  },
  required: ['name', 'pages']
};

router.get('/', (req, res) => {
  const books = booksCache.keys().map(key => booksCache.get(key));
  res.send(books);
});

router.head('/:book', (req, res) => {
  if (booksCache.get(req.param.book)) {
    res.send('OK');
  } else {
    res.status(404).send();
  }
});

router.get('/:book', (req, res) => {
  const book = booksCache.get(req.param.book);
  if (book) {
    res.send(book);
  } else {
    res.status(404).send();
  }
});

router.post('/:book', (req, res) => {
  const validatorResult = validator.validate(req.body, bookSchema);
  if (validatorResult.errors.length < 0) {
    if (booksCache.get(req.param.book)) {
      res.status(204).send();
    } else {
      res.status(201).send();
    }
    booksCache.set(req.param.book, req.body);
  } else {
    res.status(400).send(validatorResult.errors);
  }
});

module.exports = router;