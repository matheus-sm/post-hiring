import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AxiosError } from 'axios'

interface sector {
  sector_id: number,
  sector_name: string,
  description: string
}

export function ListaSetor() {
  const navigate = useNavigate()
  const [data, setData] = useState<sector[]>([])

  useEffect(() => {
    loadDataTable()
  }, [])
  
  async function loadDataTable() {
    const response = await api.get('/api/sector/listAllSector')
    console.log(response)
    setData(response.data)
  }

  async function handleDelete({ sector_id }: sector) {
    try {
      await api.delete(`/api/sector/deleteSector/${sector_id}`)
      loadDataTable()
      alert('Setor excluído com sucesso!')
    } catch (ex: unknown) {
      if (ex instanceof AxiosError) {
        alert(`ERRO: ${ex?.response?.data.mensagem}`)
      }
    }
  }

  function handleEdit({ sector_id }: sector) {
    navigate(`/CadSetor/${sector_id}`, { replace: true })
  }
  
 function renderTable() {
    try {
  
      return (
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>#</th>
              <th style={{ textAlign: 'left' }}>Código</th>
              <th style={{ textAlign: 'left' }}>Nome</th>
              <th style={{ textAlign: 'left' }}>Descrição</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item: sector, index: number) => (
              <tr key={index}>
                <td width="50">{ index }</td>
                <td width="150">{ item.sector_id }</td>
                <td width="200">{ item.sector_name }</td>
                <td width="300">{ item.description }</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Editar</button>
                  <button onClick={() => handleDelete(item)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    } catch (error) {
      console.log('error', error)
    }
  }
  
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <button onClick={() => navigate('/cadSetor')}>Novo</button>
        { renderTable() }
      </div>
    </div>
  )
}

export default ListaSetor;