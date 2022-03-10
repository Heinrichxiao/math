const express = require('express');
const math = express.Router();
// eslint-disable-next-line no-unused-vars
const db = require('../db.json');
const gametoscript = {
  "addition2n": "/js/add.js"
};
const gametogamename = {
  "addition2n": "Addition 2-digit without regrouping"
};

math.get('/math/:game', (req, res) => {
  const game = req.params.game;
  res.render("math", {gamename: gametogamename[game],
                      script: gametoscript[game]
                     })
});

module.exports = math;