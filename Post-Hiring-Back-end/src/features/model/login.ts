const loginConnection = require('../../database/connection')

async function Auth(nickname: string, password: string){

    const sql = `select user_id, user_name, sector_id, is_supervisor, nickname, email from public.user where nickname = $1 and password = $2 `

    const values = [nickname, password]

    try {

        const res = await loginConnection.client.query(sql,values);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}


module.exports = {Auth}

