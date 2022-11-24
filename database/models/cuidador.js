const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Cuidador=database.define('cuidador',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    quali:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    cidade:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    contato:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
});

module.exports=Cuidador;