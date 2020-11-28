const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', async (req, res, next) => {
  try {
    /**
     * TODO
     * REJECT IF no headers
     * or login doesn't match email or phone number
     */
    console.log(req.headers.authorization, req.body)
    const [ username, password ] = Buffer.from(req.headers.authorization.split(' ')[1], 'base64').toString().split(':');

    const user = {
      'username': username,
      'role': password
    }
    const token = jwt.sign(user, 'testedtested', { expiresIn: 300 })

    res.json({
      token
    });
    next()
  } catch (e) {
    console.error(e)
  }
});

router.post('/:new_token', async (req, res) => {
  try {
    res.send('test')
  } catch (e) {
    console.error(e)
  }
})

module.exports = router;
