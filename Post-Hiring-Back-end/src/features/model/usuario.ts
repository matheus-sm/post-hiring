const usuarioConnection = require('../../database/connection')

async function listAllUser() {
  const sql = `select * from public.user`

  try {
    const res = await usuarioConnection.client.query(sql);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
}

async function insertUsuario(user_name: string, birth_date: Date, sector_id: number, is_supervisor: boolean, nickname: string, email: string, password: string) {
  const sql = `insert into public.user (user_name, birth_date, sector_id, is_supervisor, nickname, email, password)
                values ($1,$2,$3,$4,$5,$6,$7) returning user_id`
  const values = [user_name, birth_date, sector_id, is_supervisor, nickname, email, password]

  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
}

async function insertUsuarioAdm(user_id: string) {
  const sql = `insert into public.user_adm (user_id)
                values ($1) returning user_adm_id`
  const values = [user_id]

  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
}

async function insertUsuarioAssociate(user_id: string, supervisor_id: string) {
  const sql = `insert into public.user_associate (user_id, supervisor_id)
                values ($1,$2) returning user_associate_id`
  const values = [user_id, supervisor_id]

  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
}

async function updateUsuario(user_name: string, birth_date: Date, sector_id: number, nickname: string, email: string, password: string, user_id: number) {
  const sql = `UPDATE public.user 
                    SET  user_name = $1, birth_date = $2, sector_id = $3, nickname = $4, email = $5, password = $6 where user_id = $7;`
  const values = [user_name, birth_date, sector_id, nickname, email, password, user_id]

  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    return (err);
  }
}

async function updateUsuarioAssociate(user_associate_id: string, supervisor_id: string) {
  const sql = `UPDATE public.user_associate 
                    SET  supervisor_id = $1 where user_associate_id = $2;`
  const values = [supervisor_id, user_associate_id]

  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    return (err);
  }
}

async function altStatus(user_id: string) {
  const sql = `UPDATE public.user 
    SET status = false where user_id = $1;`
  const values = [user_id]
  try {
    const res = await usuarioConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    return (err);
  }
}
module.exports = { listAllUser, insertUsuario, insertUsuarioAdm, insertUsuarioAssociate, updateUsuarioAssociate, updateUsuario, altStatus }