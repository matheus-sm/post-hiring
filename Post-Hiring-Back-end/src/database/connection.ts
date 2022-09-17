import {Client} from 'pg'; 

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
});

async function connect(){
    const connection = await client.connect().catch(e => { console.log(`Erro ao conectar: ${e}`)});
    console.log("Conectou no Postgres!");
    return connection
}

connect();

module.exports = {connect, client}