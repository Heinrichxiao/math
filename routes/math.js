const express = require('express');
const math = express.Router();
// eslint-disable-next-line no-unused-vars
const db = require('../db.json');
const gametoscript = {
  "Addition": "/js/add.js"
};

math.get('/math/:game', (req, res) => {
  const game = req.params.game;
  res.render("math", {gamename: game})
});

module.exports = math;