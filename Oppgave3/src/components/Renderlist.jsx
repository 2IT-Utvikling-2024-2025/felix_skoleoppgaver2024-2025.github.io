import React, { useEffect, useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";



const Renderlist = ({ todo, setTodo }) => {

    function handleCheck(index) {
        const current = todo[index]
        console.log(current)
        current.completed = !current.completed
        setTodo([...todo])
        localStorage.setItem('todo', JSON.stringify([...todo]))
    }

    function handleDelete(index) {
        todo.splice(index, 1)
        todo.slice('')

        setTodo([...todo])
        localStorage.setItem('todo', JSON.stringify([...todo]))
    }

    function handleEdit(itemid) {

    }

    return (
        <section className='renderedlist'>
            {todo.map((item, index) => (
                <div key={index} className='listitem'>
                    {item.completed ?
                        (<><input type="checkbox" defaultChecked onChange={() => handleCheck(index)} />  <p style={{ textDecoration: 'line-through' }}>{item.title}</p></>
                        ) : (<><input type="checkbox" onChange={() => handleCheck(index)} /><div>{item.edit ? <input type='text' /> : <p>{item.title}</p>}</div></>)}
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <button className='edit' onClick={() => handleEdit(item.id)}><FaPencilAlt /></button>
                        <button className='trashcan' onClick={() => handleDelete(index)}><FaTrashCan /></button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Renderlist