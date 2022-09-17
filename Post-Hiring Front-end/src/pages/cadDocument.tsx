import { useState } from 'react';
import '../styles/cadDocument.css'

export function CadDocument() {
  const cadDocSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log('docSetor: ' + docSetor)
    console.log('docMaterial: ' + docMaterial)
    console.log('docDescricao ' + docDescricao)
  }
  const [docSetor, setdocSetor] = useState('')
  const [docMaterial, setdocMaterial] = useState('')
  const [docDescricao, setdocDescricao] = useState('')

  return (
    <>
      <section className='cadDocument'>
        <div className="area-document">
          <div className="divDocument">
            <h1>Cadastro Documento</h1>
            <form onSubmit={cadDocSubmit}>
              <input 
                type="text" 
                name='setor' 
                id='setor' 
                placeholder='Insira o setor' 
                onChange={(event) => setdocSetor(event.target.value)} 
              />
              <input 
                type="text" 
                name='material' 
                id='material' 
                placeholder='Link do Material' 
                onChange={(event) => setdocMaterial(event.target.value)} 
              />
              <textarea 
                name="descricao" 
                className='descricao' 
                id='descricao' 
                placeholder='Insira a descricao' 
                onChange={(event) => setdocDescricao(event.target.value)} 
              />
              <input type="submit" className='button' value="Cadastrar" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default CadDocument;