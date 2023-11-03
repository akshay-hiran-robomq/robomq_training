const http = require('node:http');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; // ok
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Akshay </h1> <p> Hey This is the way to rock in the world! </p>')

});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


