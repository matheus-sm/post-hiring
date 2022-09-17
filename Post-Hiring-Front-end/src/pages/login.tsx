import React, { useState } from 'react';
import api from "../services/api"
import { useNavigate } from "react-router-dom";

import loginImg from '../assets/login.png';
import '../stylesInterface/login.css'

export function Login() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [password, setpassword] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      nickname: nickName,
      password: password
    }

    const res = await api.post('/api/login/Auth', { data });

    if (res.data.retorno.logged == true) {

      sessionStorage.setItem('user', JSON.stringify(res.data.retorno));
      // sessionStorage.setItem('user_id', res.data.retorno.user_id);
      navigate('/home')
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <>
      <section className="container">
        <div className="area-login">
          <div className="login">
            <div>
              <img className='login-img' src={loginImg} />
            </div>
            {/* ------- form -------- */}
            <form onSubmit={submit}>
              <input
                type="text"
                placeholder='Insira seu usuario'
                onChange={(event) => setNickName(event.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Insira sua senha"
                onChange={(event) => setpassword(event.target.value)}
              />
              <br></br>
              <button
                type="submit"
                className='button'
                value="Entrar"

              >Entrar</button>
            </form >
            {/* ------- form -------- */}
          </div>
        </div>
      </section>
    </>
  )
}
export default Login;

