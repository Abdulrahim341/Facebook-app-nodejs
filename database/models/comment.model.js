
import {DataTypes}  from 'sequelize'
import sequelize from '../dbconection.js'
import postModel from './post.model.js'
import userModel from './user.model.js'

const commentModel = sequelize.define('comment',{
    content:{
        type:DataTypes.STRING(100)
    }})

userModel.hasMany (postModel,{
    onDelete:'CASCADE',
    onupdate:'CASCADE'
    })
postModel.belongsTo(userModel)

postModel.hasMany(commentModel,{
    onDelete:'CASCADE',
    onupdate:'CASCADE'
})
commentModel.belongsTo(postModel)

userModel.hasMany(commentModel,{
    onDelete:'CASCADE',
    onupdate:'CASCADE'
})
commentModel.belongsTo(userModel)




export default commentModel