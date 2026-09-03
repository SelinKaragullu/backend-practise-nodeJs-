import http from 'node:http'

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('Hello')
})

server.listen(8000, () => {
    console.log('Server is running')
})