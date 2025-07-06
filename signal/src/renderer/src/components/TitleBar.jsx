import close from '../assets/close.png'
import maximize from '../assets/maximize.png'
import minimize from '../assets/minimize.png'

export default function TitleBar() {
  return (
    <div
      className="title-bar"
      style={{
        height: '40px',
        backgroundColor: '#354B53',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1
        style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          fontFamily: 'Poppins-regular',
          marginLeft: '10px',
          userSelect: 'none',
        }}
      >
        Signal
      </h1>
      <div style={{ display: 'flex', marginLeft: 'auto' }}>
        <button className='titlebarButtons' onClick={() => window.electron.ipcRenderer.send('minimize-window')}>
            <img  src={minimize} alt="Minimize" style={{ width: '10px', height: '10px', userSelect: 'none' }}  />
        </button>
        <button className='titlebarButtons' onClick={() => window.electron.ipcRenderer.send('maximize-window')}>
            <img src={maximize} alt="Maximize" style={{ width: '15px', height: '15px', userSelect: 'none' }} />
        </button>
        <button className='titlebarButtons-close' onClick={() => window.electron.ipcRenderer.send('close-window')}>
            <img src={close} alt="Close" style={{ width: '10px', height: '10px', userSelect: 'none' }} />
          
        </button>
      </div>
    </div>
  )
}
