const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/test',function(req,res){

    res.send("testing");

});
console.log("test");
app.listen(process.env.PORT || 8090, function () {
    console.log('Example app listening on port 8090!')
});