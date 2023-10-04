import { mongoose } from 'mongoose';

// define schema
const linkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    } 
});

// compile model
const Link = mongoose.model('Link', linkSchema);

export default Link;