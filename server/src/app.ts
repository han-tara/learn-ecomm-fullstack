import express, {json, Express, Request, Response} from "express";
import morgan from 'morgan';

const app: Express = express()

// middlewares
app.use(json())
app.use(morgan('combined'))

app.get('/',(req: Request, res: Response)=>{
    res.status(200).send({
        status: "OK",
        API: true,
        callback: false
    })
})

export default app
