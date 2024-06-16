import commentModel from "../../../database/models/comment.model.js";
import userModel from "../../../database/models/user.model.js";
import postModel from "../../../database/models/post.model.js";

//create comment
export const createComment=async(req,res,next)=>{
    const userExist=await userModel.findByPk(req.body.userId)
    if(userExist){
        const newcomment=await commentModel.create(req.body)
        return res.status(201).json({message:'done',newcomment})
    }
    return res.status(404).json({message:'user not exist'})
}

// all comments
export const allcomments=async(req,res,next)=>{
    const comments=await commentModel.findAll()
    return res.status(200).json({message:'done',comments}) 

}

// update comment
export const updateComment=async(req,res,next)=>{
    const{id}=req.params 
        const comment=await commentModel.update(req.body,{
            where:{
                id
            }
        })
        return comment ? res.status(200).json({message:'done',comment})
        :res.status(404).json({message:'user not founed'})
    
}


// delete comment
export const deleteComment=async(req,res,next)=>{
    const{id}=req.params
    const comment=await commentModel.destroy({
        where:{
            id
        }
    })
    return comment ? res.status(200).json({message:'deleted',comment})
    :res.status(404).json({message:'user not founed'})
}


