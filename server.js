import http from 'node:http'
import {serveStatic} from "./utils/serveStatic.js"

const PORT = 8000


const __dirname = import.meta.dirname

const server = http.createServer(async (req,res)=> {

   await serveStatic(req,res,__dirname)


})

server.listen(PORT, ()=> console.log('server running'))

const sightings= awaitgetData()
sightings.push(newSighting)
path.join('data', 'data.json')

await fs.writeFile(
pathJSON, JSON.stringify(sightings, null, 2), 'utf8'

)


if(method=='GET'){handleGet()}

if(req.url=='/app' )
   
   {if(req.method=='GET')handlePost(res)}