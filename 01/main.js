var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title=queryData.id;
    var pathname = url.parse(_url,true).pathname;

    if(pathname==='/'){
      
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err,data){
        var description=data;
        if(queryData.id === undefined){
          title='Welcome';
          description='Hello, Node.js';
        }
        fs.readdir('./data', function(error, filelist){
          
          // readdir을 이용해 하이퍼링크 및 ul 목록 기능 추가
          var list= '<ul>';
          var i =0;
          while(i<filelist.length){
            list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
            i++;
          }
          list += '</ul>';


          var template=`
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
        });
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
});
app.listen(3000);