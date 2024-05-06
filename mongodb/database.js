import mongoose from "mongoose";

let isConnected = false; //Track connection to the db...

export const connectToDB = async() => {

    mongoose.set('strictQuery', true)

    if(isConnected == true){
        console.log('MongoDB is connected successfully!')
        return;
    } else{
        //because it is an async fn, we use both try and catch based on async condition...
        try{
            await mongoose.connect(process.env.MONGO_URL, {
                //dbName: "cara",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            isConnected = true //after connection made with db, isConnected variable is toggled...
            console.log("MongoDB connected")
        }
        catch(err){
            console.log(err);
        }
    }
}