const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        minlength:5
    },
    Name:{
        type:String,
    },
    Email:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        default:0
    },
    password:{
        type:String,
        default:''
    },
    GitHub:{
        type:String,
        default:''
    },
    settings:{
        Status:{
            type:String,
            default:"Online"
        },
        isMuted:{
            type:Boolean,
            default:false
        },
        isDeafened:{
            type:Boolean,
            default:false
        }

    }
});

module.exports = {
    userSchema
}