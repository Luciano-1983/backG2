const database = require("../db/dbconfig");
const Cuidador = require("../models/cuidador");

//sugestão -- que tal criar uma interface e implementar?

async function gravarDados(dados) {
  try {
    const novoCuidador = await Cuidador.create({
      nome: dados.nome,
      quali: dados.quali,
      cidade: dados.cidade,
      contato: dados.contato,
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um cuidador: "+error)
    return false;
  }
}

async function buscaTodosDados() {
  return await Cuidador.findAll();
}

async function buscaDados(codigoCuidador) {
  return await Cuidador.findAll({
    where: {
      cidade: cidadeCuidador,
    },
  });
}

module.exports = {
  gravarDados,
  buscaDados,
  buscaTodosDados,
};
