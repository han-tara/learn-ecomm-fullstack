import mongoose from "mongoose";

mongoose.connection.once('open',()=>{
    console.log('[MongoDB]: connection is ready!')
})

mongoose.connection.on('error',(err)=>{
    console.error(`[MongoDB]: ${err}`)
})

export async function mongoConnect(MONGO_URL: string) {
    await mongoose.connect(MONGO_URL)
}

export async function mongoDisconnect() {
    await mongoose.disconnect()
}