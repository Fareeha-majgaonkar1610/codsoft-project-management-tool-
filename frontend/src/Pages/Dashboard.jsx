import React, { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../api'
import TaskList from '../Components/TaskList'
import TaskForm from '../Components/TaskForm'


export default function Dashboard() {
const [tasks, setTasks] = useState([])
const [loading, setLoading] = useState(true)
const token = localStorage.getItem('tm_token')

useEffect(() => {
fetchTasks()
}, [])


async function fetchTasks() {
setLoading(true)
try {
const data = await getTasks(token)
setTasks(data.tasks || [])
} catch (e) {
console.error(e)
setTasks([])
} finally {
setLoading(false)
}
}

async function handleCreate(task) {
const created = await createTask(token, task)
setTasks(prev => [created.task, ...prev])
}


async function handleUpdate(id, patch) {
const updated = await updateTask(token, id, patch)
setTasks(prev => prev.map(t => t._id === id ? updated.task : t))
}


async function handleDelete(id) {
await deleteTask(token, id)
setTasks(prev => prev.filter(t => t._id !== id))
}


function handleLogout() {
localStorage.removeItem('tm_token')
localStorage.removeItem('tm_user')
window.location.href = '/'
}


return (
<div className="dashboard">
<div className="dash-header">
<h2>Your Tasks</h2>
<div>
<button onClick={handleLogout}>Logout</button>
</div>
</div>


<TaskForm onCreate={handleCreate} />



{loading ? <p>Loading...</p> : (
<TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
)}
</div>
)
}