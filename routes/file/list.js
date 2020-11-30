const express = require('express');
const router = express.Router();
const { FileModel } = require('../../db/database')

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

router.get('/', async (req, res) => {
  try {
    const { limit, offset } = await getPagination(req.query.list_size, req.query.page)
    const t = await FileModel.findAll({
      limit: limit,
      offset: offset,
      where: {},
    });
    console.log(t)
    res.send('List')
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
