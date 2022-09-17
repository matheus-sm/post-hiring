import { Router } from "express";
const routes = Router();

import documentsController from '../features/controller/documentsController';
import loginController from '../features/controller/loginController';
import sectorController from '../features/controller/sectorController';
import userController from '../features/controller/userController';

//Verificação para autenticação
routes.post('/api/login/Auth', loginController.Auth)

//listagem de usuário 
routes.get('/api/user/listAllUser', userController.listAllUser)

//Registro de Usuário adm 
routes.post('/api/user/insertUser/userAdm', userController.insertUsuarioAdm)

//Registro de Usuário Associate
routes.post('/api/user/insertUser/userAssociate', userController.insertUsuarioAssociate)

//Edição de Usuário normal
routes.put('/api/user/updateUser/user/:user_id', userController.updateUsuario)

//Edição de Usuário Associado
routes.put('/api/user/updateUser/userAssociate/:user_associate_id', userController.updateUsuarioAssociate)

//Delete / Inativação de Usuário
routes.put('/api/user/delete/user/:user_id', userController.altStatus)

//listagem de documentos
routes.get('/api/documents/listAllDocuments', documentsController.listAllDocuments)

//listagem de apenas um documento
routes.get('/api/documents/listOneDocuments/:document_id', documentsController.listOneDocuments)

//Registro de documentos
routes.post('/api/documents/insertDocuments', documentsController.insertDocuments)

//Delete de documentos
routes.delete('/api/documents/deleteDocuments/:document_id', documentsController.deleteDocuments)

//Edição de documentos
routes.put('/api/documents/updateDocuments/:document_id', documentsController.updateDocuments)

//listagem de apenas um setor
routes.get('/api/sector/listOneSector/:sector_id', sectorController.listOneSector)

//Listagem de setores
routes.get('/api/sector/listAllSector', sectorController.listAllSector)

//Registro de setores
routes.post('/api/sector/insertSector', sectorController.insertSector)

//Delete de setores
routes.delete('/api/sector/deleteSector/:sector_id', sectorController.deleteSector)

//Edição de setores
routes.put('/api/sector/updateSector/:sector_id', sectorController.updateSector)

export default routes;