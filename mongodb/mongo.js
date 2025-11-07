import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const PORT=3000;

dotenv.config();
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{     // returns promises and we handle promise by using .then.catch //connec    ting database
    console.log("connected to mongodb"); 
    
}).catch((err)=>{
    console.log(err);   
    
})

// create operation
//schema
const userSchema = new mongoose.Schema({ // creating schema
    email: String,
    password: String,
})
//creating model 
const User =  mongoose.model("User",userSchema) 

app.post("/signup",async (req,res)=>{
    try{
        // const email = req.body.email;
        // const password = req.body.password;
       const {email, password} = req.body
        const user = new User({email:email,password:password});
        const savedUser = await user.save();
        res.status(201).json({message:"user created successfully"});
    }catch(err){
        console.log(err)
    }
})

app.listen((PORT),()=>{
    console.log(`server stared on the PORT ${PORT}`);
    
})

// const userSchema= new mongoose.Schema({
//     email:String,
//     password:String,
// });

// const User = mongoose.model("User",userSchema);

// app.post("/allusers",async (req,res)=>{
//     try{
//         const {email,password}=req.body;
//         const user= new User(req.body);

//         // const saltRounds = 10;
//         // const myPlaintextPassword = 'mongodb+srv://sandeepsharma9182:sandeep123@e-comm.fokiduj.mongodb.net/';

//         // bcrypt.genSalt(saltRounds, function(err, salt) {
//         // bcrypt.hash(myPlaintextPassword, salt);
//         // });

//         const savedUSer=await user.save();
//         res.status(201).json({message:"user created sucessfully"});
//         console.log(req.body);
        
//     }catch(err){
//         console.log("error",err);
        
//     }
// })

// read opeartion
// app.get("/allusers",async(req,res)=>{
//     try{
//         const users = await UserActivation.find()
//     }
// })

// app.get ("/allusers/:id",async (req,res)=>{
//     try{
//         const user  = await User.findById(req.params.id);
//         if(!user) return res.status(404).json({message:"usernot found"})
//         res.json(user)
//     }catch(err){
//         res.status(400).json({message: "something went wrong"})
//     }
// })

// app.put("/alluser/login",async(req,res)=>{
//     try{

//     }catch{
//         res.status
//     }
// })

// app.delete("/alluser")

