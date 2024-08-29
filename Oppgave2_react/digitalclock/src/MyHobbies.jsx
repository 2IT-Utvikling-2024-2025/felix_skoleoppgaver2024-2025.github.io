import react from 'react'

function MyHobbies() {

    const hobbies = [
        { title: "Utvikling", isFavore: true, upVote: 0, id: 1 },
        { title: "Gaming", isFavore: false, upVote: 0, id: 2 }
    ]


    const displayHobbies = hobbies.map((hobby) => {

        return (
            <li key={hobby.id}>
                {hobby.title}
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

export default MyHobbies