import express from "express"

const PORT =  3000;
const app =  express()

app.post("/login",async (req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email:email})
        if(!user)return res.status(404).json({meassage: "user not found"})
        const isMatch = await bcrypt.caompare(password,user.password)
        if(!Matched) return res.status().json({message:"invalid credentials"});
        const token = jwt.sign()
    }catch{

    }

    // middleware for bearer
    const verifyToken = (req,res,next)=>{
        const autheader = req.headers.authorization;
        if(!authHeader || authHeader.startwith("bearer")){

        }
    }


    const verifyToken = (req,res,next)=>{
        const token  = authHeader.split("")[];
        try{
            const decoded = jwt.verify(token.process.env.JWT_SECRET)
            req.user = decoded;
            next()
        }catch (err){
            res.status(404).json({meassage: "invalid user"})
        }
    }

    app.get("/userlist",verifyToken,async(req,res)=>{
        try{
            const users  = await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json({meassage:err.meassage})
        }
    })
} )

app.listen(PORT, ()=>{
    console.log(`server succefully creates at port : ${PORT}`)
})