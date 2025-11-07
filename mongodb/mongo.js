import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const PORT=3000;

dotenv.config();
const app=express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{    //connecting database | returns promises and we handle promise by using .then.catch 
    console.log("connected to mongodb");    
}).catch((err)=>{
    console.log(err);     
})

//schema
// const userSchema = new mongoose.Schema({ // creating schema
//     email: String,
//     password: String,
// })
const Schema =  new mongoose.Schema({      // defining schema
    email : String,
    password : String,
})
//creating model 
// const User =  mongoose.model("User",userSchema) 
const User = mongoose.model("User",Schema)     // creating model naming User and passing Schema in it

// create operation of {CRUD}

app.post("/signup",async (req,res)=>{      // sending data from signup route
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

//  read operation of {CRUD}

app.get("/allusers",async (req,res)=>{
    try{
        const users = await User.find()
        res.status(201).json(users)
    }catch(err){
        res.status(400).json({message:"something went wrong",err})
    }
})

//read user opeation by id

app.get("/allusers/:id",async (req,res)=>{   // finding data by params 
    try{
        const hathi = await User.findById(req.params.id)
        if(!hathi) return res.status(404).json({message :"usernot found"})
        res.status(201).json(hathi)
    }catch(err){
        res.status(400).json({message:"somethikng went5 wrong", err})
    }
})

//update opeartion

app.put("/allusers/:id", async (req,res)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if(!updatedUser)   return res.status(404).json(updatedUser)
            res.json(updatedUser);
    }catch(err){
        res.status(404).json({message:"something went wrong "},err)
    }
})

// delete operation 

app.delete("/allusers/:id", async(req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({message: "something went wrong", err})
            res.json(deletedUser)
    }catch(err){
        res.status(404).json({message:"errorr", err})
}
})

app.listen(PORT,()=>{
    console.log(`server initiated successfully at Port :${PORT}`)
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

