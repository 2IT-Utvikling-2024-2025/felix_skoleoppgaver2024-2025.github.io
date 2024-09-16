import React, { useState, useEffect } from 'react'

const Todoform = ({ setTodo, todo, currentId, setCurrentId }) => {

    const [current, setCurrent] = useState({
        title: '',
        completed: false,
        edit: false,
        id: currentId,
    })

    const [status, setStatus] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (current.title == '') {
            setStatus('Please add a task!')
        } else {
            localStorage.setItem('currentId', currentId + 1)
            setCurrentId(currentId + 1)
            setTodo([...todo, current])
            setStatus('Successfully added task to your list!')
            localStorage.setItem('todo', JSON.stringify([...todo, current]))
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='todoform'>
                <input type="text" placeholder='New Task' onChange={(e) => setCurrent({ ...current, title: e.target.value })} />
                <input type="submit" placeholder='Add task!' value={"Add Task!"} onClick={() => setCurrent({ ...current, id: currentId })} />
            </form>
            <p>{status}</p>
        </>
    )
}

export default Todoform