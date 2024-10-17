const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    try {
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        if (!token) res.status(400).send("Access Denied")
        const decodedToken = jwt.verify(token , 'secret')
        req.user = decodedToken
        next()
    } catch(err){
        console.error(err)
        res.status(400).send("Invalid Token")
    }
}
