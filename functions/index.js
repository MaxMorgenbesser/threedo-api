import functiions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getTasks, createTasks, updateTask, deleteTask } from './src/tasks'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tasks', getTasks)
app.post('/tasks', createTasks)
app.patch('/tasks', updateTask)
app.delete('/tasks', deleteTask)


export const api = functiions.https.onRequest(app)

