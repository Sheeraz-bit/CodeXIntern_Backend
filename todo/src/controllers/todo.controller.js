import Todo from "../models/todo.model.js"

const createTodo = async(req, res) => {
    const { title } = req.body

    if (!title){
        return res
        .status(400)
        .json({massage: "Title is required"})
    }

    const todoDocument = await Todo.create({ title })

    const todo = await Todo.findById(todoDocument._id)

    if (!todo){
        return res 
        .status(500)
        .json({message: "Something went wrong"})
    }
    return res 
    .status(200)
    .json({ todo })

}

const listAllTodos = async (req, res) => {
    const todos = await Todo.find()

    if(!todos){
        return res
        .status(400)
        .json({message: "No todo is present in the database"})

    }
    return res
    .status(200)
    .json({ todos })
}

const listTodoByTitle = async (req, res) => {
    const { title } = req.body

    if(!title){
        return res
        .status(400)
        .json({message: "Title is required"})
    }
    const todos = await Todo.find({ title: { $regex: title, $options: "i"}})

    if(!todos){
        return res
        .status(400)
        .json({message: "no requard found!"})
    }
    return res
    .status(200)
    .json({todos})
}

const updateById = async (req, res) => {
    const {id} = req.params
    const {title} = req.body
    if(!id || !title){
        return res
        .status(400)
        .json({message: "Id ad Title required"})
    }
    const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        {
            $set: {
                title: title
            }
        },
        {
            new: true
        }
    )
    return res
    .status(200)
    .json({updatedTodo})
}

const toggleStatus = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Id is required" });
    }

    const todo = await Todo.findById(id);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = !todo.completed; // toggle
    await todo.save();

    return res.status(200).json({ todo });
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Id is required" });
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
}

export{
    createTodo,
    listAllTodos,
    listTodoByTitle,
    updateById,
    toggleStatus,
    deleteTodo
}
