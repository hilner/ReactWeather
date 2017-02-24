var express = require('express');//express api access
//create app
var app = express();
const PORTA = process.env.PORT || 3000;
app.use(function(req, res, next){
  if(req.headers['-x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://'+req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORTA, function(){
  console.log('express rodando porta '+ PORTA);
});
