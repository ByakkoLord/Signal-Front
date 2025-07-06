import { use, useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/ClientContext'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setLoggedIn, socket } = useAppContext()
    const [loading, setLoading] = useState(false)

  useEffect(() => {
    socket.on('loginResponse', (data) => {
      if (data.success) {
        console.log('Login successful')
        console.log(data)
        // só  pra ficar bunitinho
        setTimeout(() => {
            setLoading(false)
            setLoggedIn(true)
        }, 4000)

      } else {
        console.error('Login failed')
        setLoading(false)
      }
    })
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    socket.emit('login', { username, password })
    console.log('Login request sent:', { username, password })
  }

  return (
    <>
      {loading ? (
        <main>
          <div class="dank-ass-loader">
            <div class="row">
              <div class="arrow up outer outer-18"></div>
              <div class="arrow down outer outer-17"></div>
              <div class="arrow up outer outer-16"></div>
              <div class="arrow down outer outer-15"></div>
              <div class="arrow up outer outer-14"></div>
            </div>
            <div class="row">
              <div class="arrow up outer outer-1"></div>
              <div class="arrow down outer outer-2"></div>
              <div class="arrow up inner inner-6"></div>
              <div class="arrow down inner inner-5"></div>
              <div class="arrow up inner inner-4"></div>
              <div class="arrow down outer outer-13"></div>
              <div class="arrow up outer outer-12"></div>
            </div>
            <div class="row">
              <div class="arrow down outer outer-3"></div>
              <div class="arrow up outer outer-4"></div>
              <div class="arrow down inner inner-1"></div>
              <div class="arrow up inner inner-2"></div>
              <div class="arrow down inner inner-3"></div>
              <div class="arrow up outer outer-11"></div>
              <div class="arrow down outer outer-10"></div>
            </div>
            <div class="row">
              <div class="arrow down outer outer-5"></div>
              <div class="arrow up outer outer-6"></div>
              <div class="arrow down outer outer-7"></div>
              <div class="arrow up outer outer-8"></div>
              <div class="arrow down outer outer-9"></div>
            </div>
          </div>
        </main>
      ) : (
        <div
          style={{
            height: '90vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          <form
            className="login-form"
            onSubmit={handleLogin}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 250,
              width: 300,
              backgroundColor: '#f0f0f0',
              borderRadius: 10
            }}
          >
            <h1 style={{ marginBottom: 20 }}>Login</h1>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                marginBottom: 10,
                width: '80%',
                border: 'none',
                borderRadius: 5,
                padding: 8,
                outline: 'none'
              }}
              type="text"
              placeholder="Usuário"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginBottom: 10,
                width: '80%',
                border: 'none',
                borderRadius: 5,
                padding: 8,
                outline: 'none'
              }}
              type="password"
              placeholder="Senha"
            />
            <button
              style={{
                marginTop: 10,
                padding: 8,
                borderRadius: 5,
                border: 'none',
                backgroundColor: '#4c6067',
                color: 'white',
                cursor: 'pointer',
                width: '80%'
              }}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  )
}
