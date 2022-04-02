import TodoController from "./controllers/todo.controller" // Ruta clase TodoController
import TodoService from "./services/todo.service" // Ruta clase TodoServie
import TodoView from "./views/todo.views" // Ruta clase TodoView

const app = new TodoController(new TodoService(), new TodoView());
