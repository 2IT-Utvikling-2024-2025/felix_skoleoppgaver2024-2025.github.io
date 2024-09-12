import React, { useState } from 'react'


const myList = [
    { title: 'Banan', id: 1 },
    { title: 'Eple', id: 2 },
    { title: 'Pære', id: 3 },
]

export default function MyList() {

    const [vote, setVote] = useState(0)

    function handleClick() {
        setVote(vote + 1)
    }

    return (
        <>
            <ul>
                {myList.map((item, index) => {
                    return <li key={index}>
                        {item.title}
                        <VoteButton onClick={handleClick} vote={vote} />
                    </li>

                })}
            </ul>
        </>
    )
}


function VoteButton({ vote, onClick }) {

    return (
        <button className='m-4' onClick={onClick}>Voted {vote} times</button>
    )
}