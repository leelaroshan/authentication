const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName:{
        type: String,
        required:[true, 'please add firstName'],
        maxlength: [50,'max 50 characteres allowed for firstname']
    },
    lastName:{
        type: String,
        required:[true, 'please add lastName'],
        maxlength: [50,'max 50 characteres allowed for lastname']
    },
    age:{
        type:Number,
        max: 130
    },
    hobbies:[{
        type:Array,
        max:150

    }]
})


module.exports = mongoose.model('User', UserSchema)