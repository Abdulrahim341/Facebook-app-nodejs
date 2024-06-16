import userModel from "../../../database/models/user.model.js";
import postModel from "../../../database/models/post.model.js";
import commentModel from "../../../database/models/comment.model.js";
import bcryptjs from 'bcryptjs'

//user  signup 
export const signUp=async(req,res,next)=>{
    const {email,password}=req.body
    const userExist=await userModel.findOne({
    where:{email}
    })
    if(userExist){
        return res.status(409).json({message:'email is already exist'})
    }
    req.body.password=bcryptjs.hashSync(password,8)
    const newUser=await userModel.create(req.body)
    return res.status(201).json({message:'done',newUser})
}


//  user  login 
export const logIn = async(req,res,next)=>{
    const user=await userModel.findOne({
        where:{email:req.body.email}
    })
    if(user){
        const match=bcryptjs.compareSync(req.body.password,user.password)
        if(match){
            return res.status(200).json({message:'done',userId:user.id})
        }
        return res.status(400).json({message:'invail email or password'})
    }
    return res.status(400).json({message:'invail email or password'})
}


//user logout
export const logout = async(req,res,next)=>{
    const user=await userModel.findOne({
        where:{email:req.body.email}
    })
    if(user){
        const match=bcryptjs.compareSync(req.body.password,user.password)
        if(match){
            return res.status(200).json({message:'log out, please login',userId:user.id})
        }
        return res.status(400).json({message:'invail email or password'})
    }
    return res.status(400).json({message:'invail email or password'})
}

// specific user with specific post&comments
export const getuser=async(req,res,next)=>{
    const user = await userModel.findByPk(req.params.id,
        {
            include:[postModel,commentModel]
            
            
        }
    )
return res.json({message:"done",user})
}