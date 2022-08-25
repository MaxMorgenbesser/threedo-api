export const getTasks=(req,res)=>{
    res.send('tasks')
}
export const createTasks=(req,res)=>{
   const newTask = req.body
   res.status(201).send("task added")
}
export const updateTask=(req,res)=>{
   const taskUpdate=req.body
   const {taskId} = req.params
   res.status(202).send('task updated')
}
export const deleteTask=(req,res)=>{
const {taskId}= req.params;
res.status(203).send("task deleted")
    
}

