const{DataTypes}= require('sequelize');
const sequelize=require('../config/database')

const User = sequelize.define('user', {
    nama:{
        type:DataTypes.STRING,
        allowNull:false
    },
    jurusan:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    no_telp:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    alamat:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        timestamps:false,
        tableName:"peserta"
    }
)

module.exports=User;