import { use, useEffect, useState } from 'react';
import { useAppContext } from '../../contexts/ClientContext';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedIn, socket } = useAppContext();

    useEffect(() => {

        socket.on('loginResponse', (data) => {
            if (data.success) {
                console.log('Login successful');
                console.log(data);
                setLoggedIn(true);
            } else {
                console.error('Login failed');
            }
        });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        socket.emit('login', { username, password });
        console.log('Login request sent:', { username, password });
    };

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <form
                className="login-form"
                onSubmit={handleLogin}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 250, width: 300, backgroundColor: '#f0f0f0', borderRadius: 10 }}
            >
                <h1 style={{ marginBottom: 20 }}>Login</h1>

                <input value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: 10, width: '80%', border: 'none', borderRadius: 5, padding: 8, outline: 'none' }} type="text" placeholder="Usuário" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: 10, width: '80%', border: 'none', borderRadius: 5, padding: 8, outline: 'none' }} type="password" placeholder="Senha" />
                <button style={{ marginTop: 10, padding: 8, borderRadius: 5, border: 'none', backgroundColor: '#4c6067', color: 'white', cursor: 'pointer', width: '80%' }} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
