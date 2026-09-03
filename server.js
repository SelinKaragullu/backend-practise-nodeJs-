import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (req, res) => {
    console.log(req.url)
  if (req.url === '/api/projects') {
   const data = await fs.readFile('data/projects.json')
    res.end('projects')
}  else {
    res.end('Not found')
}
})

server.listen(8000, () => {
    console.log('Server is running')
})