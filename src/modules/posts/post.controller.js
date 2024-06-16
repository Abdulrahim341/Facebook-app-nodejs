import userModel from "../../../database/models/user.model.js";
import postModel from "../../../database/models/post.model.js";

//create post
export const createpost=async(req,res,next)=>{
    const userExist=await userModel.findByPk(req.body.userId)
    if(userExist){
        const newpost=await postModel.create(req.body)
    return res.status(200).json({message:'done',newpost})  
    }
    return res.status(404).json({message:'user not found'})  

}


//update post
export const updatePost=async(req,res,next)=>{
    const{id}=req.params 
    const post=await postModel.update(req.body,{
        where:{
            id
        }
    })
    return res.status(200).json({message:'done',post}) 
}
 // get all posts
export const allposts=async(req,res,next)=>{
    const posts=await postModel.findAll()
return res.status(200).json({message:'done',posts}) 
}

// delete post
export const deletePost=async(req,res,next)=>{
    const{id}=req.params
    const post=await postModel.destroy({
        where:{
            id
        }
    })
    return post ? res.status(200).json({message:'deleted',post})
    :res.status(404).json({message:'not found'}) 
}

// get specific post with author
export const getpost=async(req,res,next)=>{
    const post = await postModel.findByPk(req.params.id,
        {
            include:[userModel]
        }
    )
return res.json({message:"done",post})
}
