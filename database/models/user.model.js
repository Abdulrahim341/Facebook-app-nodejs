import {DataTypes}  from 'sequelize'
import sequelize from '../dbconection.js'


const userModel = sequelize.define('user',{
    username:{
        type:DataTypes.STRING(100)
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})

export default userModel