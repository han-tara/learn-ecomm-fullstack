import {createServer} from "http";
import app from "./app";
import dotenv from 'dotenv'
import {mongoConnect} from "./services/mongo";

dotenv.config()

const server = createServer(app)
const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME
const MONGO_URL = process.env.MONGO_URL

async function loadServer() {
//     setup database connection or etc...
    console.log('Loading services')
    await mongoConnect(MONGO_URL!)
    console.log('All service loaded, starting server....')
}

function startServer() {
    // @ts-ignore
    server.listen(PORT, HOSTNAME,()=>{
        console.log(`Server ${process.pid} is running on ${HOSTNAME}:${PORT}`)
    })
}

loadServer().then(()=>startServer())