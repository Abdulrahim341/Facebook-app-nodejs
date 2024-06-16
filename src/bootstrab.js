import sequelize from "../database/dbconection.js"
import userRouter from './modules/users/user.route.js'
import postRouter from './modules/posts/post.route.js'
import commentRouter from './modules/comments/comment.route.js'







const bootstrab=(app,express)=>{
    sequelize.sync({alter:false})
    app.use(express.json())
    app.use('/users',userRouter)
    app.use('/posts',postRouter)
    app.use('/comments',commentRouter)

}

export default bootstrab