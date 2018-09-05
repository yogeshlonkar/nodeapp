const express = require('express');
const userapi = require('dao/usersapi'); // eslint-disable-line import/no-extraneous-dependencies

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userapi.getAll();
  res.send(users);
});

router.head('/:userEmail', async (req, res) => {
  if (await userapi.hasByEmail(req.params.userEmail)) {
    res.send('OK');
  } else {
    res.status(404).send();
  }
});

router.get('/:userEmail', async (req, res) => {
  const user = await userapi.getByEmail(req.params.userEmail);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.post('/:userEmail', async (req, res) => {
  try {
    const validatorResult = userapi.validate(req.body);
    if (validatorResult.errors.length <= 0) {
      const result = await userapi.save(req.body);
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
        .send({ status: false, message: `User already exists with email ${req.params.userEmail}`, error: JSON.stringify(error) });
    } else {
      res.status(500).send({ status: false, message: 'Could not save/update user', error: JSON.stringify(error) });
    }
  }
});

module.exports = router;
