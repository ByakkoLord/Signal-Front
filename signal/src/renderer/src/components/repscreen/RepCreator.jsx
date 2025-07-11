export default function RepCreator() {

    return (
        <div className="rep-creator">
            <form>
                <h2>Adicionar novo relógio</h2>
                <input type="text" placeholder="Número de série" />
                <input type="text" placeholder="Nome do cliente" />
                <input type="text" placeholder="Modelo do equipamento" />
                <input type="text" placeholder="Fabricante" />
                <button>Iniciar Testes</button>
                {<div>
                    
                </div>}
                <textarea placeholder="Relatório"></textarea>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}