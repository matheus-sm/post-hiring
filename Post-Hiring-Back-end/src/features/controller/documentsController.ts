import {Request, Response} from 'express';

const documentsModel = require('../model/documents')
 
export default {
    async listAllDocuments(request: Request, response: Response){

        const documents = await documentsModel.listAllDocuments()
        response.json(documents)
    },
    
    async insertDocuments(request: Request, response: Response){
        const{
            title,
            material_link,
            document_content,
            sector_id,
        } = request.body

        try{
            const documents =  await documentsModel.insertDocuments(title, material_link, document_content, sector_id)

            const retorno = {
                status: 200,
                mensagem: "Cadastro realizado com sucesso",
                documents: {documents}
            }
            response.json(retorno)
        } catch(err){
            const msg = {
                message: "Erro ao cadastrar"
            }
            response.json(msg)
        }
    },

    async deleteDocuments(request: Request, response: Response){
        const{
            document_id
        } = request.params
        try{
            const documents = await documentsModel.deleteDocuments(document_id)
            const retorno = {
                status: 200,
                mensagem: "Documento Deletado",
                documents: documents
            }
            response.json(retorno)
        } catch(err){
            const msg = {
                mensagem: "Não foi possível deletar o documento",
                erro: err
            }  
            response.json(msg)
        }
    },

    async updateDocuments(request: Request, response: Response){

        const{
            document_id
        } = request.params

        const{
            title,
            material_link,
            document_content,
            sector_id

        } = request.body

        try{

            const documents = await documentsModel.updateDocuments(document_id, title, material_link, document_content,sector_id)
            const retorno = {
                status: 200,
                documents: documents
            }
            response.json(retorno)

        } catch(err){

            const msg = {
                mensagem: "Não foi possível atualizar o documento",
                erro: err
            }
            response.json(msg)
        }
    },
}