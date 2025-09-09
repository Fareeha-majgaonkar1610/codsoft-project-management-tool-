const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'


async function request(path, { method = 'GET', body, token } = {}) {
const headers = { 'Content-Type': 'application/json' }
if (token) headers['Authorization'] = `Bearer ${token}`


const res = await fetch(`${BASE_URL}${path}`, {
method,
headers,
body: body ? JSON.stringify(body) : undefined
})


if (!res.ok) {
let msg
try { msg = await res.json() } catch { msg = { message: await res.text() } }
throw msg
}


if (res.status === 204) return null
return res.json()
}


// USER API
export async function login(email, password) {
return request('/api/user/login', { method: 'POST', body: { email, password } })
}


export async function register(name, email, password) {
return request('/api/user/register', { method: 'POST', body: { name, email, password } })
}


export async function getCurrentUser(token) {
return request('/api/user/me', { token })
}


// TASK API
export async function getTasks(token) {
return request('/api/task/gp', { token })
}


export async function createTask(token, data) {
return request('/api/task/gp', { method: 'POST', token, body: data })
}


export async function updateTask(token, id, data) {
return request(`/api/task/${id}/gp`, { method: 'POST', token, body: data })
}


export async function deleteTask(token, id) {
return request(`/api/task/${id}/gp`, { method: 'DELETE', token })
}