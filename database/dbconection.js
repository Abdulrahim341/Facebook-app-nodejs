import {Sequelize,DataTypes}  from 'sequelize'
const sequelize = new Sequelize('assignment6','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
console.log('DB connected');
}).catch(()=>{
    console.log('DB fails to connect');
})


export default sequelize