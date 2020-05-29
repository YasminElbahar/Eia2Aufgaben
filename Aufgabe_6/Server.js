"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Haushaltshilfe;
(function (Haushaltshilfe) {
    var server = Http.createServer();
    var port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            var url = Url.parse(_request.url, true);
            for (var key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            var jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("This is my response");
        _response.end();
    }
})(Haushaltshilfe = exports.Haushaltshilfe || (exports.Haushaltshilfe = {}));
//# sourceMappingURL=Server.js.map