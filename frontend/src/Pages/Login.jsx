import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api'


export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
const navigate = useNavigate()


async function handleSubmit(e) {
e.preventDefault()
setError(null)
try {
const data = await login(email, password)
// expected { token, user }
localStorage.setItem('tm_token', data.token)
localStorage.setItem('tm_user', JSON.stringify(data.user))
navigate('/dashboard')
} catch (err) {
setError(err.message || JSON.stringify(err))
}
}


return (
<div className="card">
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<label>
Email
<input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
</label>
<label>
Password
<input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
</label>
<button type="submit">Log in</button>
{error && <p className="error">{error}</p>}
</form>
</div>
)
}