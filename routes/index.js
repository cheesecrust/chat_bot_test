var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res) {
  res.send("helo world");
})

router.get('/todayMenu', function(req, res) {
  const responseBody = {
    version: "1.0",
    data:{
      "name" : "sushi",
      "money" : "30000"
    }
  };
  res.status(200).send(responseBody);
});

router.post('/todayMenu', function(req, res) {
  const responseBody = {
    version: "1.0",
    data:{
      "name" : "sushi",
      "money" : "30000"
    }
  };
  res.status(200).send(responseBody);
});


module.exports = router;
