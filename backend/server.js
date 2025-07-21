import express from 'express'

import { CONNECT_DB, GET_DB, CLOSE_DB } from './config/mongoConnect.js'
import AsyncExitHook from 'async-exit-hook'
import dotenv from 'dotenv'
import { userRouter } from './routes/userRoute.js'
import { productRouter } from './routes/productRoute.js'
import { tableRouter } from './routes/tableRoute.js'
import { orderRouter } from './routes/orderRoute.js'
import path from 'path'
import cors from 'cors'
dotenv.config()

const START_SERVER = () => {

    const app = express()
    const port = 9000
    const hostname = 'localhost'
    // app.get('/', async (req, res) =>{
    //   console.log(await GET_DB().listCollections().toArray())

    //   res.send('<h1 style="color:red">Hello Le Si Thuan</h1>')
    // })
        app.use(cors());
    app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
    app.use(express.json());
    app.use('/api/users',userRouter);
    app.use('/api/products',productRouter);
    app.use('/api/tables',tableRouter);
    app.use('/api/orders', orderRouter);

    app.listen(port, hostname, () => {
        console.log(`Server is running click le http://${hostname}:${port} to start`)
    })
    AsyncExitHook(() => {
        console.log("Closing")

        CLOSE_DB();
        console.log("Closed")

    })
}

// cach 1
// CONNECT_DB()
//   .then(()=>console.log("Connected to ALlass"))
//   .then(()=>START_SERVER())
//   .catch((console.error()))

// cach 2
(async () => {
    try {
        console.log("Connecting")
        await CONNECT_DB()
        console.log("Connected")
        START_SERVER()
    } catch (error) {
        console.log(error)
    }
})()