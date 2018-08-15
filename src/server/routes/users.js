const express = require('express');
const { Validator } = require('jsonschema');
const { users: userCache } = require('../cache');

const router = express.Router();
const validator = new Validator();
const userSchema = {
  id: '/user',
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: {
      type: 'string',
      format: 'email'
    },
    address: { $ref: '/address' }
  },
  required: ['name', 'email', 'address']
};
// Address, to be embedded on user
const addressSchema = {
  id: '/address',
  type: 'object',
  properties: {
    line1: { type: 'string' },
    line2: { type: 'string' },
    zip: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    country: { type: 'string' }
  },
  required: ['country']
};

validator.addSchema(addressSchema, '/address');

router.get('/', (req, res) => {
  const users = userCache.keys().map(key => userCache.get(key));
  res.send(users);
});

router.head('/:userEmail', (req, res) => {
  if (userCache.get(req.params.userEmail)) {
    res.send('OK');
  } else {
    res.status(404).send();
  }
});

router.get('/:userEmail', (req, res) => {
  const user = userCache.get(req.params.userEmail);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.post('/:userEmail', (req, res) => {
  console.info(req.params);
  const validatorResult = validator.validate(req.body, userSchema);
  if (validatorResult.errors.length <= 0) {
    if (userCache.get(req.params.userEmail)) {
      res.status(204).send();
    } else {
      res.status(201).send();
    }
    userCache.set(req.params.userEmail, req.body);
  } else {
    res.status(400).send(validatorResult.errors);
  }
});

module.exports = router;
