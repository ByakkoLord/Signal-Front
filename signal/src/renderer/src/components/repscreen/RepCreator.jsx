import Select from 'react-select';
export default function RepCreator() {

    const testOptions = [
        { value: 'test1', label: 'Teste 1' },
        { value: 'test2', label: 'Teste 2' },
        { value: 'test3', label: 'Teste 3' },
        { value: 'test4', label: 'Teste 4' }
    ]

    return (
        <div>
            <h2>Fazer novo relatório</h2>
            <form>
                <input type="text" placeholder="Número de série" />
                <input type="text" placeholder="Nome do cliente" />
                <input type="text" placeholder="Modelo do equipamento" />
                <input type="text" placeholder="Fabricante" />
                <button>Iniciar Testes</button>
                {<div>
                    <h3>{testTitle}</h3>    
                    <Select options={testOptions} />
                </div>}
                <textarea placeholder="Relatório"></textarea>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}