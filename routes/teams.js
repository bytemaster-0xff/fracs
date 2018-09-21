var express = require('express');
var router = express.Router();
var teamManager = require('../middleware/team-manager');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  teamManager.getTeams()
  .then(teams => {
    res.json(teams);
  });
});

module.exports = router
