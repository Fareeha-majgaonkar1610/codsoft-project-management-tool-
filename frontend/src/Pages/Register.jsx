import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../api'


export default function Register() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
const navigate = useNavigate()


async function handleSubmit(e) {
e.preventDefault()
setError(null)
try {
await register(name, email, password)
navigate('/')
} catch (err) {
setError(err.message || JSON.stringify(err))
}
}


return (
<div className="card">
<h2>Register</h2>
<form onSubmit={handleSubmit}>
<label>
Name
<input value={name} onChange={e => setName(e.target.value)} required />
</label>
<label>
Email
<input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
</label>
<label>
Password
<input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
</label>
<button type="submit">Register</button>
{error && <p className="error">{error}</p>}
</form>
</div>
)
}