const mongoose=require('mongoose')

const connectDB= async ()=>{
   
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongodb is connected at ${conn.connection.host}`);     
    } catch (error) {
        console.log(error)
        process.exit(1) //it helps us to move next from error its save us to stuck in error
    }
}

module.exports=connectDB