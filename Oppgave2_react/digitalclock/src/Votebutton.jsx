import React, { useState } from 'react'


const Votebutton = () => {

    const [vote, setVote] = useState(0)

    return (
        <><button onClick={(() => setVote(vote + 1))}>Voted: {vote}</button></>
    )
}

export default Votebutton