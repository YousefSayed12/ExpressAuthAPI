const userSchema = require("../Schemas/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req,res) => {
    try {
        let userBody = new userSchema(req.body)
        let hashPassword = await bcrypt.hash(req.body.password , 10)
        userBody.password = hashPassword
        let createUser = await userBody.save()
        res.json({message:"user registered" , user:createUser})
    } catch(err) {
        console.error(err)
        res.status(400).json({message:"please register again"})
    }
}

exports.login = async (req,res) => {
    try {
        let user = await userSchema.findOne({email:req.body.email})
        if(!user){
            return res.json({message:"invalid email or password"})
        }
        let password = await user.comparePassword(req.body.password)
        if(!password){
            return res.json({message:"invalid email or password"})
        }
        const token = jwt.sign({name:user.name ,id:user._id ,role:user.role} , 'secret')
        res.json({message:"user logined" , user:{name:user.name , id:user._id , email:user.email , token}})
    } catch(err) {
        console.error(err)
        res.status(400).json({message:"please login again"})
    }
}
