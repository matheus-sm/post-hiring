import '../styles/editDocument.css'

export function EditDocument() {
    return (
        <>
            <section className='editDocument'>
                <div className="area-document">
                    <div className="divDocument">
                        <h1>Edição de Documento</h1>
                        <form >
                            <input 
                            type="text" 
                            name='setor' 
                            />
                            <input 
                            type="text" 
                            name='material' 
                            />
                            <textarea 
                            name="descricao" 
                            className='descricao'
                            >
                            </textarea>
                            <input type="submit" className='button' value="Editar" />
                        </form>
                    </div>
                </div>
                </section>
        </>
    )
}

export default EditDocument;