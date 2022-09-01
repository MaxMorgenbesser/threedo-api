import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getTasks, createTasks, updateTask, deleteTask } from './src/tasks.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tasks', getTasks)
app.post('/tasks', createTasks)
app.patch('/tasks/:taskId', updateTask)
app.delete('/tasks/:taskId', deleteTask)


export const api = functions.https.onRequest(app)

