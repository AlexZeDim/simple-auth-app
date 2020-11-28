const express = require('express');
const router = express.Router();
const UserModel = require('../db/database')

router.post('/', async (req, res) => {
  try {
    console.log(req.body)

    if (!req.body.id || !req.body.password) return res.send('Data should have format { id: string, password: string }')

    const User = {
      id: req.body.id,
      password: req.body.password
    }

    const userDoc = await UserModel.findByPk(User.id);

    if (userDoc !== null) return res.send('Already exists')

    await UserModel.create(User)
    res.send('User created')
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
