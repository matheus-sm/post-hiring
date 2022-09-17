import {Request, Response} from 'express';

const loginModel = require('../model/login')
 
export default {
    async Auth(request: Request, response: Response){

        const{
            nickname,
            password
        } = request.body.data

        try{
            const [login] = await loginModel.Auth(nickname,password)
            console.log(login)
            
            const retorno = {
                status: 200,
                retorno: {
                    user_id: login.user_id,
                    user_name: login.user_name,
                    sector_id: login.sector_id,
                    is_supervisor: login.is_supervisor,
                    nickname: login.nickname,
                    email: login.email,
                    logged: true
                }
            }
            response.json(retorno)
            
            
        } catch(err){

            const msg = {
                retorno:{
                    mensagem: "Usuário não autenticado",
                    logged: false,
                    erro: err
                }
                
            }
            response.json(msg)
        } 
    }
}