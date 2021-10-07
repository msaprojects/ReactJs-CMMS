import React, { useState } from 'react';
import ApiService from '../../utils/Services'


const Login = () => {
    // ++ Initial Variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault(); // * biar web tidak reload ketika ada action
        // ++ alert when textbox null value
        if(username ==='' || password ==='' ){
            setError('Username / Password belum diisi!')
        }
        // ++ send post value from textbox
        await ApiService.post(`login`, {
            username: username,
            password: password,
            tipe: 'web'
        }).then((response) => {
            setError('Login Berhasil')
            console.log("Response? ",response.data);
        }).catch((error) => {
            setError('Login Gagal');
            console.log("Error?", error);
        })
    }
    return (
        <div className='container' id='container'>
            <div className='form-container log-in-container'>
                <form onSubmit={ handleLogin }>
                    <h1>Login</h1>
                    <br/>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br/>
                    {/* {username}{password} */}
                    {error && <div className='error'>{error}</div>}
                    <button type='submit'>Masuk</button>
                </form>
            </div> 
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>[ C M M S ]</h1>
                        <p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
                    </div>
                </div>
		    </div>
        </div>
        
    );
}

export default Login;
