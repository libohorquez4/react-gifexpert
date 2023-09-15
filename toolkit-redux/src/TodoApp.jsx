// import { useGetTodosQuery } from "./store/apis/todosApi";
import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

export const TodoApp = () => {

    // como renombrar data a todos
    // const { data: todos = [], isLoading, } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading, } = useGetTodoQuery(todoId);

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1)
    }

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    return (
        <>
            <h1>RTK - Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo }>Prev to do</button>

            <button onClick={nextTodo}>Next to do</button>
            {/* <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
                                {todo.title}
                            </li>
                        )
                    })
                }
            </ul> */}

        </>
    )
}
