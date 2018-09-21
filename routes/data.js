var express = require('express');
var router = express.Router();
var dataManager = require('../middleware/sampledata-manager');

/* GET users listing. */
router.get('/insertsites', function(req, response, next) {
  console.log("in here");
    dataManager.generateSites()
      .then(resultMessage => {
        console.log("now here");
        let html = `<html><head></head><body>${resultMessage}</body></html>`;
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();  
      });
});

module.exports = router
