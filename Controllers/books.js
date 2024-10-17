const bookSchema = require("../Schemas/book")

exports.getAllBooks = async (req,res) => {
    try {
        let books = await bookSchema.find()
        res.json({meesage:"Done" , data:books})
    } catch(err) {
        res.status(400).json({message:"somthing with wrong" , error:err})
    }
}

exports.getOneBook = async (req,res) => {
    try {
        let book = await bookSchema.find({_id:req.params.id})
        res.json({meesage:"Done" , data:book})
    } catch(err) {
        res.status(400).json({message:"somthing with wrong" , error:err})
    }
}

exports.updateBook = async (req,res) => {
    try {
        await bookSchema.findOneAndUpdate(req.params.id , req.body)
        res.json({meesage:"Done" , data:[]})
    } catch(err) {
        res.status(400).json({message:"somthing with wrong" , error:err})
    }
}

exports.deleteBook = async (req,res) => {
    try {
        if(req.user.role === 'admin'){
            await bookSchema.findByIdAndDelete(req.params.id)
            res.json({meesage:"Done" , data:[]})
        } else{
            res.status(403).json({message:"you dont have permission"})
        }
    } catch(err) {
        res.status(400).json({message:"somthing went wrong" , error:err})
    }
}

exports.createBook = async (req,res) => {
    try {
        if(req.user.role === 'admin'){
            const createBook = await bookSchema.create(req.body)
            res.json({meesage:"Done" , data:createBook})
        } else{
            res.status(403).json({message:"you dont have permission"})
        }
    } catch(err) {
        res.status(400).json({message:"somthing went wrong" , error:err})
    }
}
