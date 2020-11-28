const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.headers.authorization)
    console.log(Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':'))
    res.send('respond with a resource');
  } catch (e) {
    console.error(e)
  }

});

module.exports = router;
