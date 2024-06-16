import {DataTypes}  from 'sequelize'
import sequelize from '../dbconection.js'


const postModel = sequelize.define('post',{
    title:{
        type:DataTypes.STRING(100)
    },
    content:{
        type:DataTypes.STRING
    },
    author:{
        type:DataTypes.STRING
    }
})

export default postModel