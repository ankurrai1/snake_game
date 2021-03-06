const PORT=8000;
const http  = require('http');
const fs = require('fs');

const getContentType=function(file){
  let contentTypes = {
    'js':'text/javascript',
    'html':'text/html',
    'css':'text/css',
    'jpeg':'image/jpeg',
    'txt':'text/plain',
    'pdf':'text/plain',
    'jpg':'image/jpg',
    'gif':'image/gif',
  }
  let fileExtension = file.split(".").slice(-1)[0];
  return contentTypes[fileExtension];
}

const requestHandler = function(req,res){
  let file = req.url=='/'? 'index.html' :req.url.slice(1);
  if(fs.existsSync(file)){
    if(req.method=="POST"){
      req.on('data',function(text){
        storeComment(text.toString());
      });
      return;
    }
    let contentType = getContentType(file);
    res.setHeader('content-Type',contentType);
    res.statusCode = 200;
    res.write(fs.readFileSync(file));
}else{
  res.statusCode = 404;
  res.write('404 file not found')
  }
  res.end();
}
const server = http.createServer(requestHandler);
server.listen(PORT);
console.log(`listning to ....${PORT}`);
