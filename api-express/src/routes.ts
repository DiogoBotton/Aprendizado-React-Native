import express, { json } from 'express';

// Importando o db do connection.ts
import db from '../src/database/connection';

// Variável manipulavel
const routes = express.Router();

// API para resgatar informações do banco

// Get para resgatar clientes
routes.get('/clientes', async (request, response) => {

    const dataBase = await db;

    dataBase.serialize(() => {
        // Fazendo a busca no DB e mostrando no console
        dataBase.each('select * from clientes', function (err: {message: any;}, row: any) {
            // Tratativa de erros
            if(err){
                console.error(err.message)
            }

            // Retorna tudo que temos no banco da entidade "Clientes" no console
            console.log(row)
        });

        // Exibe Status Code 200 (Ok) caso tudo ocorra certo
        return response.send(200);
    })
})

// Post para adicionar clientes
routes.post('/cadastrar-cliente', async (request, response) => {
    const dataBase = await db;

    // Escrevendo em sqlite e usando concatenação de string para jogar as variaveis do corpo da requisição no lugar das INTERROGAÇÕES (no campo VALUES)
    dataBase.run(`insert into clientes (name, telefone, cep, n_casa) values (?,?,?,?)`, [
        `${request.body.name}`,`${request.body.telefone}`,`${request.body.cep}`,`${request.body.n_casa}`
    ], function (err: {message: any;}, row: any){
        // Caso der algum erro
        if(err){
            console.error(err.message);
        }
        
        console.log(row)

        // Retorna Status code 200 caso tudo ocorra certo
        return response.send(200)
    })
})

export default routes;