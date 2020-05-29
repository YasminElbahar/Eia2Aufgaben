
export namespace Haushaltshilfe {

    import * as Http from "http";
    import * as Url from "url";

    let server: Http.Server = Http.createServer();


    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);

    server.listen(port);
    server.addListener("request", handleRequest);


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

        }
        _response.write("This is my response");
        _response.end();


    }

}