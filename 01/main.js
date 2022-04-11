var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring'); 
var path = require('path');

var template = require('./lib/template.js'); 
// 함수를 객체로 묶어 폴더와 같이 사용함.

// refactoring - 동작방법은 똑같이 유지하며 내부의 코드를 효율적으로 바꾸는 행위.
// 객체를 이용해서 얼마나 refactoring을 잘 하느냐에 따라 실력이 갈림.
// 반복되는 패턴을 함수화, 객체화, 배열화 시키며 유지보수하기 쉽도록 만들도록 하자.
 
// request : 요청할 때 브라우저가 보낸 정보
// response : 브라우저로 전송할 정보
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = template.list(filelist);
          var html = template.html(title, list, 
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`);
          response.writeHead(200);
          response.end(html);
        })
      } else {
        fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.html(title, list, 
              `<h2>${title}</h2>${description}`,
              `<a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`);
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - Create';
        var list = template.list(filelist);
        var html = template.html(title, list, `
        <form action="/create_process"
        method="post">
            <p><input type="text" name = "title" placeholder="title"></p>
            <p>
                <textarea name="description"placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit">
            </p>
        </form>
        `,'');
        response.writeHead(200);
        response.end(html);
      });
    } else if(pathname === '/create_process'){
      var body='';
      request.on('data', function(data){
        body += data;
        if(body.length>1e6)
          request.connection.destroy();
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`,description,'utf8',function(err){
          response.writeHead(302,
              {Location: `/?id=${title}`}
            );
          response.end();
        })
      });
    } else if (pathname==='/update'){
      fs.readdir('./data', function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.html(title, list, 
            `
            <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name = "title" placeholder="title" value="${title}"></p>
                <p>
                    <textarea name="description"placeholder="description">${description}</textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
          response.writeHead(200);
          response.end(html);
        });
      });
    } else if (pathname==='/update_process'){
      var body='';
      request.on('data', function(data){
        body += data;
        if(body.length>1e6)
          request.connection.destroy();
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`,`data/${title}`,function(error){
          fs.writeFile(`data/${title}`,description,'utf8',function(err){
            response.writeHead(302,
                {Location: `/?id=${title}`}
              );
            response.end();
          })
        })
      });
    } else if (pathname==='/delete_process'){
      var body='';
      request.on('data', function(data){
        body += data;
        if(body.length>1e6)
          request.connection.destroy();
      });
      request.on('end',function(){
        var post = qs.parse(body);
        var id = post.id;
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`, function(error){
          response.writeHead(302,
            {Location: `/`}
          );
        response.end();
        })
      });
    }else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);