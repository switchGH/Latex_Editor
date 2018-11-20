var http = require('http');
var path = require('path');
var fs = require('fs');

var mimeType = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};

http.createServer(function(req,res){
    var lookup = path.basename(decodeURI(req.url)) || 'editor.html',
    f = 'content/' + lookup;
    fs.exists(f, function(exists){
        if(exists){
            fs.readFile(f, function(err, data){
                if(err){
                    res.writeHead(500);
                    res.end('Server Error!');
                    return;
                }
                var headers = {'Content-Type':mimeType[path.extname(f)] + ';charset=utf-8'};
                res.writeHead(200, headers);
                res.end(data);
            });
            return;
        }
        res.writeHead(404);
        res.end('ページが見つかりません!')
    });
}).listen(8080);

