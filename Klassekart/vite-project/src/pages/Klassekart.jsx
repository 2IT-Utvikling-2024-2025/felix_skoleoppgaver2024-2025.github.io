import React, { useEffect, useState } from 'react'

const Klassekart = () => {

    const [classes, setClasses] = useState([])

    const [generatedClass, setGeneratedClass] = useState([])

    const [inputValue, setInputValue] = useState('')

    const [generated, setGenerated] = useState(false)

    const handleGeneration = () => {

        for (let i = 0; i < classes.length; i++) {
            const random = Math.floor(Math.random() * i)

            console.log(random)
        }


        setGenerated(true)
    }

    function addName() {

        if (inputValue !== '') {

            if (classes === null) {
                setClasses
            }

            const user = {
                id: classes.length + 1,
                name: inputValue
            }

            setClasses([...classes, user])

        } else {
            alert("Please enter a value")
        }
    }


    return (
        <div className='main'>
            {generated ? (
                <>
                    <div className='klassekart'>
                        <h1>Klassekart</h1>
                        <div className='teacherdesk'><h3>Teacher Desk</h3></div>
                        <div className='grid-class'>
                            {classes.map((element, id) => (
                                <>
                                    <div key={element.id} className='desks'>
                                        <h3>{element.name}</h3>
                                    </div>
                                    {id % 4 === 1 ? <div></div> : null}
                                </>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='create'>
                        <h1 className='title'>Generer ditt eget klassekart!</h1>
                        <div className='add'>
                            <input type="text" placeholder='Enter a name' onChange={(e) => setInputValue(e.target.value)} />
                            <button className='' onClick={addName}>Legg til</button>
                        </div>
                        <div className='elever'>
                            {classes.length === 0 ? null : (
                                <>
                                    <div className='blurball'></div>
                                    <h1 className='under-title'>Elever</h1>
                                    <ul>
                                        {classes.map((element) => (
                                            <li key={element.id}>{element.name}</li>
                                        ))}
                                    </ul>
                                    <button className='generate' onClick={() => handleGeneration()}>Generer Klasse Kart</button>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Klassekart