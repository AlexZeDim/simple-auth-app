const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');
const { FileModel } = require('../../db/database')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
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
      fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        console.log(ext, file)
        cb(null, true)
      },
      limits: { fileSize: 102400 },
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
