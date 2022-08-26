import DbConnect from "./DbConnect";

export const getTasks = async (req, res) => {
   // connect to database
  const db = DbConnect();
   //connect to collection and gets all
 const collection = await db.collection("tasks").get()
   //handle errors
 .catch(err=>res.status(500).send(err))
   // gets each item as an object returns the object with the id of the items
 const tasks = collection.docs.map(doc =>{
   let task = doc.data()
   task.id = doc.id
   return task
 })
  res.send("tasks");
};


export const createTasks = async (req, res) => {
  const newTask = req.body;
if (!newTask || !newTask.task){
res.status(400).send({success:false, message:"Invalid Request"})
return
}
const db = DbConnect()
await db.collection("tasks").add(newTask)
.catch(err=>res.status(500).send(err))
res.status(201);
getTasks(req,res)
};



export const updateTask = (req, res) => {
  const taskUpdate = req.body;
  const { taskId } = req.params;
  res.status(202).send("task updated");
};


export const deleteTask = (req, res) => {
  const { taskId } = req.params;
  res.status(203).send("task deleted");
};