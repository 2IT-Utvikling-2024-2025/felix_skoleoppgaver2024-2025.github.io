import react, { useState } from 'react'

function MyHobbies() {

    const hobbies = [
        { title: "Utvikling", isFavore: true, upVote: 0, id: 1 },
        { title: "Gaming", isFavore: false, upVote: 0, id: 2 }
    ]


    const displayHobbies = hobbies.map((hobby) => {

        return (
            <li key={hobby.id} style={{ color: hobby.isFavore ? "magenta" : "white" }}>
                {hobby.title}
                <VoteButton />
            </li>
        )
    })

    return (
        <>
            <h1>Mitt navn er felix!</h1>
            <ul>
                {displayHobbies}
            </ul>
        </>
    )
}


function VoteButton() {

    const [vote, setVote] = useState(0)


    return (
        <button className='button' onClick={(() => setVote(vote + 1))}>Voted {vote} time/s</button>
    )
}

export default MyHobbies