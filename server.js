const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops1</h1>
        <p>We can't seeem to find the page you are looking
        for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)