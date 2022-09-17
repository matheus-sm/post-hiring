import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import api from "../services/api"
import "../styles/cadSetor.css"

export function CadSetor() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    params.id && loadSetor()
  }, [])
  
  async function loadSetor() {
    try {
      const { data: { sector } } = await api.get(`api/sector/listOneSector/${params.id}`)
      setName(sector.sector_name)
      setDescription(sector.description)
    } catch (error) {
      console.log(error)
    }
  }
 
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      const data = {
        sector_name: name,
        description: description
      }
      
      if (params.id) {
        await api.put(`/api/sector/updateSector/${params.id}`, data)
        alert('Alterações realizadas com sucesso!')
      } else {
        await api.post('/api/sector/insertSector', { data })
        alert('Setor cadastrado com sucesso!')
      }

      navigate('/listaSetor', { replace: true })
    } catch (ex: unknown) {
      if (ex instanceof AxiosError) {
        alert(`ERRO: ${ex?.response?.data.mensagem}`)
      }
    }
  }

  return (
    <section className="cadSetor">
      <div className="area-setor">
        <div className="divSetor">
          <button onClick={() => navigate('/listaSetor')}>Voltar</button>
          <h1>Cadastro Setor</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="setor"
              id="setor"
              placeholder="Insira o setor"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <textarea
              name="descricao"
              id="descricao"
              className="descricao"
              placeholder="Insira a descricao do cadastro de setor"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
            <button type="submit" className="button">
              { params.id ? 'Salvar' : 'Cadastrar' }
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CadSetor;