//includes the http core module
var http = require('http');
var moment = require('moment');

//creates a server that listens for connections on a specified port
http.createServer(function(req,res){
  res.write(moment().format('MMM Do YYYY'));
  res.write(moment("08-24-1992","MM DD YYYY\n").format('dddd [the] Do [of] MMMM [in the year] YYYY'));
  res.write('\n\n\n');
  res.write('\n\n\n That was '+ moment("08-24-1992","MM DD YYYY").fromNow() + 'years ago');
  res.write('\n Hey it\'s my first node app!!');
  res.end();
}).listen(8000)
