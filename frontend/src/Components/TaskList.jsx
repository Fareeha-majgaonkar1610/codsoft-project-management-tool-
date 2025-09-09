import React from 'react'


export default function TaskList({ tasks = [], onUpdate, onDelete }) {
if (tasks.length === 0) return <p>No tasks yet.</p>


return (
<ul className="task-list">
{tasks.map(task => (
<li key={task._id} className={`task ${task.completed ? 'done' : ''}`}>
<div className="task-main">
<input
type="checkbox"
checked={!!task.completed}
onChange={() => onUpdate(task._id, { completed: !task.completed })}
/>
<div className="task-text">
<strong>{task.title}</strong>
{task.description && <div className="desc">{task.description}</div>}
{task.priority && <span className="badge">{task.priority}</span>}
{task.dueDate && <span className="badge">Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
</div>
</div>
<div className="task-actions">
<button onClick={() => onDelete(task._id)}>Delete</button>
</div>
</li>
))}
</ul>
)
}