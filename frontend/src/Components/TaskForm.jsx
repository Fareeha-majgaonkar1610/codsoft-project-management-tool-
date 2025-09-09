import React, { useState } from 'react'


export default function TaskForm({ onCreate }) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [priority, setPriority] = useState('Low')
const [dueDate, setDueDate] = useState('')


async function handleSubmit(e) {
e.preventDefault()
if (!title.trim()) return
await onCreate({ title, description, priority, dueDate })
setTitle('')
setDescription('')
setPriority('Low')
setDueDate('')
}


return (
<form className="task-form" onSubmit={handleSubmit}>
<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
<input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)" />
<select value={priority} onChange={e => setPriority(e.target.value)}>
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
</select>
<input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
<button type="submit">Add Task</button>
</form>
)
}