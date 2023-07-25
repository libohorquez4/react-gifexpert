import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false,
        },
        {
            id: new Date().getTime() * 2,
            description: 'Recolectar la piedra del tiempo',
            done: false,
        }
    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log({todo});
    }



    return (
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* <ul className="list-group">
                        {
                            todos.map(
                                todo => (
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="align-self-center">Item 1</span>
                                        <button className="btn btn-danger">Borrar</button>
                                    </li>
                                )
                            )
                        }

                    </ul> */}

                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    esto es lo mismo a lo de abajo
                    {/* <TodoAdd onNewTodo={todo => handleNewTodo(todo)} /> */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/* <form>
                        <input
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Agregar
                        </button>

                    </form> */}
                </div>
            </div>




        </>
    )
}
