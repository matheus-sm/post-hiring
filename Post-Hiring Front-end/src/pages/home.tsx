import '../stylesInterface/home.css';
import React, { useState, useContext, useEffect } from 'react';
import api from '../services/api';

export function Home() {
  const [edtTitle, setedtTitle] = useState("")
  const [edtDocument, setedtDocument] = useState("")
  const [edtMaterialLink, setMaterialLink] = useState("")
  const [edtEdtDocumentDContent, setedtEdtDocumentDContent] = useState("")
  const [edtSectorId, setSectorId] = useState("")
  const [edtSectorName, setedtSectorName] = useState("")
  const [edtDescption, setedtDescption] = useState("")

  interface teste {
    setores: setor[]
  }

  interface setor {
    description: String,
    document_content: String,
    document_id: number,
    material_link: String,
    sector_id: number,
    sector_name: String,
    title: String,
  }

  const [Home, setHome] = useState<setor[]>([] as setor[])

  const acao = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  async function listHome() {
    const res = await api.get("/api/documents/listAllDocuments")
    setHome(res.data)
  }

  useEffect(() => {
    listHome()
  }, [])

  if (!Home.length) {
    return <div>No data</div>
  }

  return (
    <>
      <br /><br /><br />

      <section className='home'>
        <div className='div'>
          <h1>Titulo do Setor</h1>
          <p>
            Descrição do setor
          </p>
          <div className="divider-2"></div>

          {Home.map((home, index) =>
            <div key={index}>
              <h1>{home.title}</h1>
              <p>
                {home.description}
              </p>
              <p>
                {home.material_link}
              </p>
              <div className='divider'></div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Home;

{/* <div className="divider-2"></div>
                        <h1>{hom.title}</h1>
                        <p>
                            {hom.description}
                        </p>
                        <p>
                            {hom.material_link}
                        </p>
                    <div className='divider'></div> */}
