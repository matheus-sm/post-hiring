import { useState } from "react";
import "../styles/cadUsuario.css";

export function CadUsuario() {
  const cadUsuarioSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("userName: " + userName);
    console.log("userDate " + userDate);
    console.log("userSetor " + userSetor);
    console.log("userSupervisor " + userSupervisor);
    console.log("userEmail " + userEmail);
    console.log("userPassword " + userPassword);
  };
  const [userName, setuserName] = useState("");
  const [userDate, setuserDate] = useState("");
  const [userSetor, setuserSetor] = useState("");
  const [userSupervisor, setuserSupervisor] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  return (
    <>
      <section className="cadUsuario">
        <div className="area-usuario">
          <div className="divUsuario">
            <h1>Cadastro Usuário</h1>
            <form onSubmit={cadUsuarioSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Insira o nome completo"
                onChange={(event) => setuserName(event.target.value)}
              />
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Insira data de nascimento"
                onChange={(event) => setuserDate(event.target.value)}
              />
              <input
                type="text"
                name="setor"
                placeholder="Insira o setor"
                onChange={(event) => setuserSetor(event.target.value)}
              />
              <input
                type="text"
                name="supervisor"
                placeholder="Insira o supervisor"
                onChange={(event) => setuserSupervisor(event.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Insira o email"
                onChange={(event) => setuserEmail(event.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Insira a senha"
                onChange={(event) => setuserPassword(event.target.value)}
              />
              <input
                type="password"
                name="password2"
                placeholder="Confirme a senha"
              />
              <input type="submit" className="button" value="Cadastrar" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CadUsuario;