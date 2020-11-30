const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');
const { FileModel } = require('../../db/database')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: async function (req, file, cb) {
    const ext = path.extname(file.originalname);
    /**
     * If file exists,
     * if no => create
     */
    const fileDoc = await FileModel.findOne({ where: { name: 'test' } })
    if (!fileDoc) {
      await FileModel.create({
        name: 'test',
        extension: ext,
        mime: file.mimeType,
        //TODO size and data
      })
    }

    console.log(Buffer.from(req.ip).toString('hex') + '-' + Date.now(), ext, file)
    cb(null, Buffer.from(req.ip).toString('hex') + '-' + Date.now())
  }
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
  next()
});

router.post('/', async (req, res) => {
  try {
    const upload = multer({
      storage: storage,
    }).single('upload');
    upload(req, res, function (err) {
      if (err) return res.end("Something went wrong! " + err);
      res.redirect('back');
    })
  } catch (e) {
    console.error(e)
  }
});

module.exports = router;
