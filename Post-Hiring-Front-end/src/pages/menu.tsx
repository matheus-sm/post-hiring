import '../stylesInterface/menu.css'
import { useState, useEffect } from 'react';
import { IoMdMenu } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';

export function Menu() {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
    
  const user = JSON.parse(sessionStorage.getItem("user") ?? '')
  const user_adm = user.is_supervisor

  function logout() {
    navigate('/login')
  }

  return (
    <>
      <nav className="upper-nav">
        <div className='logo'>Post<strong>Hiring</strong>.</div>
        <i>
          <button onClick={() => setActive(!active)}>
            <div className='toggle icon-menu'><IoMdMenu style={{ height: 30, width: 30, cursor: "pointer", borderRadius: 10 }} /></div>
          </button>
        </i>
      </nav>
      <aside className={`${!active ? "hidden" : "shown"}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>

          { user_adm && 
            <>
              <li><Link to="/cadUsuario">Usuário</Link></li>
              <li><Link to="/cadDocument">Documento</Link></li>
              <li><Link to="/listaSetor">Setor</Link></li>
            </>
          }
          <li><div className='divider'></div></li>
          <li><a className='log' href="#" onClick={logout}>logout</a></li>
        </ul>
      </aside>
    </>
  )
}

export default Menu;