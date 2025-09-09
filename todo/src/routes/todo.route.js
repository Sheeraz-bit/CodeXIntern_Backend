import {Router} from "express"
import { 
    createTodo,
    listAllTodos,
    listTodoByTitle,
    updateById,
    toggleStatus,
    deleteTodo
} from "../controllers/todo.controller.js"

const router = Router()

router.route("/create").post(createTodo)
router.route("/list").get(listAllTodos)
router.route("/list-by-title").post(listTodoByTitle)
router.route("/update/:id").patch(updateById)
router.route("/toggle/:id").patch(toggleStatus)
router.route("/delete/:id").delete(deleteTodo)

export default router