var express = require('express');//express api access
//create app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('express rodando porta 3000');
});
