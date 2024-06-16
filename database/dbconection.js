import {Sequelize,DataTypes}  from 'sequelize'
const sequelize = new Sequelize('mysql://uleq8pefbgvm0lr9:BW5BxvVRd8IZKr0h5ZPL@bzt4ny6bkdc7afn5feh6-mysql.services.clever-cloud.com:3306/bzt4ny6bkdc7afn5feh6')

sequelize.authenticate().then(()=>{
console.log('DB connected');
}).catch(()=>{
    console.log('DB fails to connect');
})


export default sequelize