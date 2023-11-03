const http = require('node:http');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    if(res.url =='/'){
        res.statusCode = 200; // ok
        res.end('<h1> This is Akshay </h1> <p> Hey This is the way to rock in the world! </p>')
    }
    else if(res.url =='/about'){
        res.statusCode = 200; // ok
        res.end('<h1> This is about page of  Akshay </h1> <p> Hey This is the way to rock in the world! </p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found </h1> <p> Page is not found</p>')

    }



});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


