var port = process.env.PORT || 8000;

var http = require("http");

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE html>");
	response.write("<html>");
	response.write("<head>");
	response.write("<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'/>");
	response.write("<title>Günaydın dünya!</title>");
	response.write("</head>");
	response.write("<body>");
	response.write("Günaydın dünya!");
	response.write("</body>");
	response.write("</html>");
    response.end();
});	

server.listen(port);