import { use, useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/ClientContext'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setLoggedIn, socket, setLoggedInUser, loggedInUser } = useAppContext()
    const [loading, setLoading] = useState(false)
    const [createUser, setCreateUser] = useState(false)
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    socket.on('loginResponse', (data) => {
      if (data.success) {
        console.log('Login successful')
        console.log(data)
        
        console.log('Usuário logado:', loggedInUser)
        setTimeout(() => {
            setLoading(false)
            setLoggedIn(true)
        }, 1000)

      } else {
        console.error('Login failed')
        setLoading(false)
      }
    })
  }, [])

  const handleLogin = (e) => {
    setLoggedInUser(username)
    console.log('Usuário armazenado:', username)
    e.preventDefault()
    setLoading(true)
   
    socket.emit('login', { username, password })
    console.log('Login request sent:', { username, password })

  }

  const handleCreateUser = (e) => {
    e.preventDefault()
    setLoading(true)

    socket.emit('createUser', { username: newUsername, password: newPassword })
    console.log('Create user request sent:', { username: newUsername, password: newPassword })
  }

  return (
    <>
      {loading ? (
        <main>
          <div className="dank-ass-loader">
            <div className="row">
              <div className="arrow up outer outer-18"></div>
              <div className="arrow down outer outer-17"></div>
              <div className="arrow up outer outer-16"></div>
              <div className="arrow down outer outer-15"></div>
              <div className="arrow up outer outer-14"></div>
            </div>
            <div className="row">
              <div className="arrow up outer outer-1"></div>
              <div className="arrow down outer outer-2"></div>
              <div className="arrow up inner inner-6"></div>
              <div className="arrow down inner inner-5"></div>
              <div className="arrow up inner inner-4"></div>
              <div className="arrow down outer outer-13"></div>
              <div className="arrow up outer outer-12"></div>
            </div>
            <div className="row">
              <div className="arrow down outer outer-3"></div>
              <div className="arrow up outer outer-4"></div>
              <div className="arrow down inner inner-1"></div>
              <div className="arrow up inner inner-2"></div>
              <div className="arrow down inner inner-3"></div>
              <div className="arrow up outer outer-11"></div>
              <div className="arrow down outer outer-10"></div>
            </div>
            <div className="row">
              <div className="arrow down outer outer-5"></div>
              <div className="arrow up outer outer-6"></div>
              <div className="arrow down outer outer-7"></div>
              <div className="arrow up outer outer-8"></div>
              <div className="arrow down outer outer-9"></div>
            </div>
          </div>
        </main>
      ) : !createUser ? (
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
          <h6 onClick={() => setCreateUser(true)}>Ainda não tem uma conta?</h6>
        </div>
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
            <h1 style={{ marginBottom: 20 }}>Criar Conta</h1>

            <input
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              onClick={handleCreateUser}
            >
              Criar Conta
            </button>
          </form>
          <h6 onClick={() => setCreateUser(false)}>Já tem uma conta?</h6>
        </div>
      )}
    </>
  )
}
