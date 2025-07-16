import NFE from '../../assets/repsImages/NFE.png'

export default function NFEScreen() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '50vw',
        backgroundColor: '#8b8b8bff',
        borderRadius: '10px',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <h2>Nota Fiscal Eletrônica</h2>
      <img width={'70%'} src={NFE} alt="" />
      <button>Voltar</button>
    </div>
  )
}
