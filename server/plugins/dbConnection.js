import { mongoose } from 'mongoose';

export default async function connectDB() {
    const { MONGODB_URI } = useRuntimeConfig();
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database is connected!')
    }
    catch(err) {
        console.log('Unable to connect database: ', err);
    } 
}