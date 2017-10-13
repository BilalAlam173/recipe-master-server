const express = require('express');
const app = express();
app.get('/test',function(req,res){

    res.a="testing";

});

app.listen(process.env.PORT || 8090, function () {
    console.log('Example app listening on port 8090!')
});