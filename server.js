const express = require('express');
const firebase=require('firebase');
var basicAuth = require('express-basic-auth');

function getUnauthorizedResponse(req) {
    return req.auth ?
        ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') :
        'No credentials provided'
}

const app = express();
var config = {
    apiKey: "AIzaSyACBjiE9ZDoDMmbGKOxarGLD8h3njUBrwg",
    authDomain: "recipe-master-173.firebaseapp.com",
    databaseURL: "https://recipe-master-173.firebaseio.com",
    projectId: "recipe-master-173",
    storageBucket: "recipe-master-173.appspot.com",
    messagingSenderId: "766277075631"
  };
  firebase.initializeApp(config);

  app.use(basicAuth({
    users: { 'admin': 'supersecret' },
    unauthorizedResponse: getUnauthorizedResponse
}));

app.get('/test',function(req,res){

    res.send("testing");

});

app.get('/create',function(req,res){
    var email="bilal@itretina.com";
    password="valleyforge16740";
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        res.send(errorMessage);
        console.log(errorMessage+",error code :"+errorCode);
        // ...
      });
});

console.log("test");
app.listen(process.env.PORT || 8090, function () {
    console.log('Example app listening on port 8090!')
});