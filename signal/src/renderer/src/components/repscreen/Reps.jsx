import repIdClass from '../../assets/repsImages/rep1.jpg'
import checkmark from '../../assets/repsImages/check-mark.png'
import Xmark from '../../assets/repsImages/x-mark.png'


export default function Reps() {
  return (
    <div className="reps">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img
          style={{
            borderRadius: '10px',
            marginRight: 20,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          width={241}
          src={repIdClass}
          alt="REP"
        />
        <div>
          <div style={{ backgroundColor: '#3f4f55', padding: 10, borderRadius: 10 }}>
            <h3>Número de Série: 00014003750123456</h3>
            <h3>Modelo: IdClass 671</h3>
            <h3>Cliente: Texas Carnes</h3>
          </div>

          <div style={{ marginTop: 10, backgroundColor: '#3f4f55', padding: 10, borderRadius: 10 }}>
            <div className="reps-accessories">
              <h4>Fonte</h4> <img width={16} height={16} src={checkmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Nota fiscal</h4> <img width={16} height={16} src={checkmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Rolete</h4> <img width={16} height={16} src={Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Bobina</h4> <img width={16} height={16} src={Xmark} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          gap: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <div
          style={{
            overflowY: 'auto',
            maxHeight: 190,
            maxWidth: '50%',
            marginTop: 20,
            backgroundColor: '#3f4f55',
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Defeito:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptas laboriosam
            in velit quibusdam nisi cumque beatae impedit modi rem quos aliquam exercitationem,
            reiciendis dignissimos quae, cum fugit facilis iure!
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            
            maxHeight: 200,
            marginTop: 20,
            backgroundColor: '#3f4f55',
            gap: 10,
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Histórico:</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>

          <div
            style={{
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            style={{
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}
