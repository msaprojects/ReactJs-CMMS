import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { setUserSession } from '../../utils/Common'
import ApiService from '../../utils/Services'
import logo from '../../assets/images/logoge.png'

const Login = (props) => {
    // ++ Initial Variable
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault() // * biar web tidak reload ketika ada action
        // ++ alert when textbox null value
        if(username ==='' || password ==='' ){
            setError('Username / Password belum diisi!')
        }
        setLoading(true)
        // ++ send post value from textbox
        await ApiService.post(`login`, {
            username: username,
            password: password,
            tipe: 'web'
        }).then((response) => {
            setLoading(false)
            setError('Login Berhasil')
            setUserSession(response.data.data.access_token, response.data.data.username, response.data.data.jabatan)
            console.log("Response? ",response)
            console.log("Response? ",response.data.data.access_token)
            history.push('/dashboard')
        }).catch((error) => {
            setLoading(false)
            setError(error.response.data.message)
            console.log("Error?", error.response.data.message)
            history.push('/login')
        })
    }
    return (
        <div className='body-login'>
        <div className='container-login' id='container'>
            <div className='form-container log-in-container'>
                <form onSubmit={ handleLogin }>
                    <h1>Login</h1>
                    {error && <div className='error'><br/>{error}</div>}
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
                    <button type='submit'>{loading ? 'Loading...' : 'Login'}</button>
                </form>
            </div> 
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <img src={logo} alt='Logo Ge'/>
                        <br/>
                        <h1>[ C M M S ]</h1>
                        <p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
                    </div>
                </div>
		    </div>
        </div>
        </div>
    )
}

export default Login
