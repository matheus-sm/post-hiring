import { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/editSetor.css';

export function EditSetor() {

  const [edtSetor, setedtSetor] = useState("");
  const [edtDescricao, setdescricaoSetor] = useState("");

  const [sectors, setSectors] = useState([] = [{sector_name: "", sector_id: ""}]);

  const edtSetorSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("edtSetor: " + edtSetor);
    console.log("edtDescricao " + edtDescricao);
  };

  useEffect(() => {
    async function listSectors(){
      const res = await api.get("/api/sector/listAllSector");
      console.log(res.data)
      setSectors(res.data)
    }
    listSectors()
  }, []);

  if (!sectors.length) return <div>No data</div>;

  return (
    <>
      <section className='editSetor'>
        <div className="area-editSetor">
          <div className="divEditSetor">
            <h1>Editar Setor</h1>
            <form onSubmit={edtSetorSubmit}>
            <select name="selectionField"> 
              {sectors.map(sector => (
                <option value={sector.sector_id}>{sector.sector_name}</option>
              ))}
            </select>
              <textarea 
                name="descricao" 
                className='descricao'
                id='descricao' 
                onChange={(event)=> setdescricaoSetor(event.target.value)}>
              </textarea>
              <input className="button" type="submit" value="Editar" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}