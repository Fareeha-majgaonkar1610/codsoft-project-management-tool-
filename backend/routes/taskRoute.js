import express from 'express';
import {createTask, deleteTask, getTask, getTaskById, updateTask} from '../controllers/taskController.js';
import authMiddleware from '../middleware/auth.js';

const taskRouter = express.Router();

taskRouter.route('/gp')
.get(authMiddleware, getTask)
.post(authMiddleware, createTask);

taskRouter.route('/:id/gp')
.get(authMiddleware, getTaskById)
.post(authMiddleware, updateTask)
.delete(authMiddleware, deleteTask);

export default taskRouter;