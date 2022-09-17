const documentsConnection = require('../../database/connection')

async function listAllDocuments(){

    const sql = `select * from documents as doc left join sector as sec on sec.sector_id = doc.sector_id`

    try {

        const res = await documentsConnection.client.query(sql);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}

async function insertDocuments(title: string, material_link: string, document_content: string, sector_id: any){

    const sql = `insert into public.documents(title,material_link,document_content, sector_id)
    values ($1, $2, $3, $4)`
    const values = [title, material_link, document_content, sector_id]
    try {

        const res = await documentsConnection.client.query(sql, values);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}

async function deleteDocuments(document_id: number){
    const sql = `delete from public.documents where documents.document_id = $1`
    const values = [document_id]

    try{
        const res = await documentsConnection.client.query(sql, values);
        return res.rows;
    }catch (err){
        return(err);
    }
}

async function updateDocuments(document_id: number, title: string, material_link: string, document_content: string, sector_id:number){

    const sql = `UPDATE public.documents
                SET title = $1, material_link =$2, document_content =$3, sector_id =$4  where document_id = $5;`
    const values = [title, material_link, document_content, sector_id, document_id]

    try {

        const res = await documentsConnection.client.query(sql, values);
        return res.rows;

    } catch (err) {
        return(err);
    }
}


module.exports = {listAllDocuments, insertDocuments, deleteDocuments, updateDocuments}