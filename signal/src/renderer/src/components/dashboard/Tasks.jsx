export default function Tasks() {
  return (
    <div className="tasks">
      <h1
        style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          textAlign: 'center',
          alignSelf: 'flex-start',
          paddingBottom: '10px',
          fontFamily: 'Poppins-regular',
        }}
      >
        Coleta de Banco
      </h1>
      <div style={{ width: '100%', height: 2, backgroundColor: 'white', marginBottom: 10 }} />
      <h2 style={{ color: 'white', fontSize: '1.0rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>Técnico - Pedro</h2>
      <h2 style={{ color: 'white', fontSize: '1.0rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>Estrela Azul</h2>
      {/* <p></p> */}
      <h3 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 'normal', alignSelf: 'flex-start', marginTop: 10 }}>Agendado: 23/06 - 10:00</h3>
    </div>
  )
}
