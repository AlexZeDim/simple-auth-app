const express = require('express');
const router = express.Router();
const { FileModel } = require('../../db/database')

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};


router.get('/?list_size=:list_size&page=:page', async (req, res) => {
  try {
    //limit = size
    //offset = page * size
    console.log(req.params)
    res.send('List')
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
