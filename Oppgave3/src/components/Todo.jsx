import React, { useState, useEffect } from 'react'
import Todoform from './Todoform'
import Renderlist from './Renderlist'

const Todo = () => {

    const [todo, setTodo] = useState([])

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('todo')) {
            setTodo(JSON.parse(localStorage.getItem('todo')))
        }
        if (localStorage.getItem('currentId')) {
            setCurrentId(parseInt(localStorage.getItem('currentId')))
        } else {
            localStorage.setItem('currentId', 0)
        }
    }, [])

    return (
        <div className='todo'>
            <h1>Todo List</h1>
            <Todoform setTodo={setTodo} todo={todo} currentId={currentId} setCurrentId={setCurrentId} />
            <Renderlist todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default Todo