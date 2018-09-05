const express = require('express');
const booksapi = require('dao/booksapi'); // eslint-disable-line import/no-extraneous-dependencies

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await booksapi.getAll();
  res.send(books);
});

router.head('/:book', async (req, res) => {
  if (await booksapi.hasByName(req.params.book)) {
    res.send('OK');
  } else {
    res.status(404).send();
  }
});

router.get('/:book', async (req, res) => {
  const book = await booksapi.getByName(req.params.book);
  if (book) {
    res.send(book);
  } else {
    res.status(404).send();
  }
});

router.post('/:book', async (req, res) => {
  try {
    const validatorResult = booksapi.validate(req.body);
    if (validatorResult.errors.length <= 0) {
      const result = await booksapi.save(req.body);
      if (result.insertedCount === 0) {
        res.status(201).send();
      } else {
        res.status(204).send();
      }
    } else {
      res.status(400).send(validatorResult.errors);
    }
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .send({ status: false, message: `Book already exists with name ${req.params.book}`, error: JSON.stringify(error) });
    } else {
      res.status(500).send({ status: false, message: 'Could not save/update book', error: JSON.stringify(error) });
    }
  }
});

module.exports = router;
