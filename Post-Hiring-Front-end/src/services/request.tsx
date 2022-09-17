import api from "./api";

async function login(usuario: string, senha: string) {

    const user = {
        "nickname" : usuario,
        "password" : senha
    }
    
    return api.post('login/Auth', user).then(
        (res)=>{
            console.log('1', res);
            if(!res.data.erro) {
                localStorage.setItem('token', res.data.token)
                return res.data;  
            } else {
                console.log('err', res);
            }});
}

async function logout() {
    try {
        await api.post("logout")
        return true;
    } catch(error) {
        return false;
    }
}

export default {login, logout}

