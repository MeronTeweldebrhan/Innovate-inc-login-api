import mongoose from 'mongoose'
import dotenv  from 'dotenv'

dotenv.config()
const uri=process.env.MONGO_URI


const connection =async()=>{
try {
        mongoose.connect(uri)
        console.log(" Conected to MongoDB")
    } catch (error) {
        console.error(error)
        console.log("Sucessfult Conected to MongoDB",error)
    }
}

export default connection