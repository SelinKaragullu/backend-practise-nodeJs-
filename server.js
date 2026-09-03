import http from 'node:http'

const server = http.createServer((req, res) => {
    console.log(req.url)
  if (req.url === '/api/projects') {
    res.end('projects')
}  else {
    res.end('Not found')
}
})

server.listen(8000, () => {
    console.log('Server is running')
})