var express = require("express");
var bodyParser = require("body-parser");
//métodos CRUD para manipular clientes
const clienteDao=require("./database/dao/cliente-dao");
const ProdutoDao=require("./database/dao/produto-dao");
const CuidadorDao=require("./database/dao/cuidador-dao");

//middleware - irá fazer um parser do dados do front e formatar em req.body
var app = express();



//define o uso do body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/getInfo", function (req, res) {
  res.json({ user: "geekxxx" });
});
app.post("/clientes/salvar", async function (req, res) {
  try {
    const retorno = await clienteDao.gravarDados({
      codigo: req.body.codigo,
      nome: req.body.nome,
      endereco: req.body.endereco,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201).send("Ok");
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.get("/clientes/listar", async function (req, res) {
  const dados = await clienteDao.buscaTodosDados();
  console.log(dados);
  res.status(200).send(dados);
});

app.get("/clientes/listar/:key", async function (req, res) {
  const key = req.params.key;
  const dados = await clienteDao.buscaDados(key);
  console.log(dados);
  res.status(200).send(dados);
});



app.post("/produto/salvar", async function (req, res) {
  try {
    const retorno = await ProdutoDao.gravarDados({
      codigo: req.body.codigo,
      descricao: req.body.descricao,
      unidademedida: req.body.unidademedida,
      precoun: req.body.precoun,
      estoque: req.body.estoque,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201).send("Ok");
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.get("/produto/listar", async function (req, res) {
  const dados = await ProdutoDao.buscaTodosDados();
  console.log(dados);
  res.status(200).send(dados);
});

app.get("/produto/listar/:key", async function (req, res) {
  const key = req.params.key;
  const dados = await ProdutoDao.buscaDados(key);
  console.log(dados);
  res.status(200).send(dados);
});







app.post("/cuidador/salvar", async function (req, res) {
  try {
    const retorno = await CuidadorDao.gravarDados({
      nome: req.body.nome,
      quali: req.body.quali,
      cidade: req.body.cidade,
      contato: req.body.contato,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201).send("Ok");
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
});

app.get("/cuidador/listar", async function (req, res) {
  const dados = await CuidadorDao.buscaTodosDados();
  console.log(dados);
  res.status(200).send(dados);
});

app.get("/cuidador/listar/:key", async function (req, res) {
  const key = req.params.key;
  const dados = await CuidadorDao.buscaDados(key);
  console.log(dados);
  res.status(200).send(dados);
});






module.exports = app;
