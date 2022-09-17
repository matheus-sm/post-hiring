import '../styles/perfil.css'

export function Perfil() {
    return (
        <>
            <div className='divOnePerfil'>
                <section className='perfil'>
                    <div className="area-perfil">
                        <div className="divPerfil">
                            <h1>Perfil de Usuário</h1>
                            <form action="">
                                <label htmlFor="">Retorna Nome Completo</label>
                                <label htmlFor="">Retorna Data Nascimento</label>
                                <label htmlFor="">Retorna E-mail</label>
                                <label htmlFor="">Retorna Setor</label>
                                <label htmlFor="">Retorna Supervisor</label>
                            </form>
                        </div> 
                    </div>
                </section> 
            </div>
        </>
    )
}

export default Perfil;