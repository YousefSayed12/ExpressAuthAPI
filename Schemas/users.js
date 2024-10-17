const mongoose = require("mongoose")
const { Schema } = mongoose
const bcrypt = require("bcryptjs")

const userSchema = new Schema({
    name:String,
    age:Number,
    email:{type:String , unique:true},
    phone:{type:String , unique:true},
    password:String,
    role:String
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("app-60" , userSchema)