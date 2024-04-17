import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    message:{
        required:true,
        type:String
    },
    
},{timeStamp:true})
let Contact = mongoose.models.Contact || mongoose.model('Contact',ContactSchema);
export default  Contact;