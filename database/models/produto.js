const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    codigo:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    descricao:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    unidademedida:{
        allowNull:false,
        type:Sequelize.STRING(10),   
    },
    precoun:{
        allowNull:false,
        type:Sequelize.STRING(50),   
    },
    estoque:{
        allowNull:false,
        type:Sequelize.STRING(50),   
    },
});

module.exports=Produto;