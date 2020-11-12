// Aqui estamos pegando essa função que chama o BD e joga em uma variável
const sqlite3 = require('sqlite3').verbose();

// Necessita que o path (caminho) do arquivo .sqlite esteja completamente específicado
const db = new sqlite3.Database('./src/database/clientes.sqlite', sqlite3.OPEN_READWRITE, (err: {message: any}) => {
    // Conectando com DB
    if(err){
        console.log(err.message);
    }
    console.log('Connect to database.');
    console.log(db);
})

// Exportando o banco de dados (já conectado);
export default db;