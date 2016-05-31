var express = require('express');
var router = express.Router();
var path = require('path');
var Favorite = require('../models/favoriteModel');

router.post('/', function (req, res) {
  var favorite = new Favorite(req.body);
  favorite.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.get('/', function (req, res) {
  Favorite.find({}, function (err, favorites) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(favorites);
  });
});

module.exports = router;
