
const app=require("./app");
const clienteDao=require("./database/dao/cliente-dao");
const ProdutoDao=require("./database/dao/produto-dao");
const request=require("supertest");




describe("Conjunto de testes app",()=>{

    it("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um cliente o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um cliente e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(clienteDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });









    it("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um produto o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(ProdutoDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/produto/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um produto e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(ProdutoDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/produto/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });

})