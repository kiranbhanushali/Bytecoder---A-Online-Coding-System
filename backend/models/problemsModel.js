const mongoose = require('mongoose');
const { Schema } = mongoose;
const problemSchema = new Schema({
    title:{
        type:String , 
        required:true
    },
    code: {
        type:String , 
        required:true
    },
    category:{
        type: String ,
    },
    markdown: {
        type:String , 
        required:true
    },
    meta: {
        accuracy: Number,
        submissions:  Number
    }
});

module.exports = mongoose.model("ProblemModel", problemSchema);
