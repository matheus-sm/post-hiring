const loginConnection = require('../../database/connection')

async function Auth(nickname: string, password: string) {
  const sql = `
    select
        public.user.user_id,
        public.user.user_name,
        public.user.sector_id,
        public.user.is_supervisor,
        public.user.nickname,
        public.user.email,
        public.documents.document_id
    from
        public.user
    left join 
        public.documents on public.documents.sector_id  = public.user.sector_id
    where
        public.user.nickname = $1
        and public.user.password = $2`
  const values = [nickname, password]

  try {
    const res = await loginConnection.client.query(sql, values);
    return res.rows;
  } catch (err) {
    return (err);
  }
}

module.exports = { Auth }