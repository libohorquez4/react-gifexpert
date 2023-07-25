import React from 'react'
import { TodoItem } from './TodoItem';

export const TodoList = ({todos = []}) => {

    console.log('esto es todos:', todos);
    return (
        <>
            <ul className="list-group">
                {
                    todos.map(
                        todo => (
                            <TodoItem key={todo.id} todo={todo} />
                        )
                    )
                }

            </ul>
        </>
    )
}
