
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {

    const {handleNewTodo, handleDeleteTodo, handleToggleTodo, todos, todosCount, pendingTodosCount} = useTodos();

    return (
        <>
            <h1>Todo App: {todosCount} , <small>pendientes: {pendingTodosCount} </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* <TodoList todos={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} /> */}
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* esto es lo mismo a lo de abajo */}
                    {/* <TodoAdd onNewTodo={todo => handleNewTodo(todo)} /> */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
