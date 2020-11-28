const express = require('express');
const router = express.Router();
//const UserModel = require('../db/database')

router.get('/', async (req, res) => {
  try {
    res.send('List')
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
