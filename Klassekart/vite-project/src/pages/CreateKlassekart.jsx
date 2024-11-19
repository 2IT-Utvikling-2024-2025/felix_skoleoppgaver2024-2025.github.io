import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiRequest } from '../functions/apicalls'
import { CreateStudentUrl, CreateClassUrl } from '../variables.json'

const CreateKlassekart = () => {

    const [students, setStudents] = useState([])

    const [inputValue, setInputValue] = useState('')

    const [generated, setGenerated] = useState(false)

    const navigate = useNavigate()

    const handleGeneration = async () => {

        const studentIds = []

        for (let i = 0; i < students.length; i++) {


            const response = await ApiRequest(CreateStudentUrl, 'POST', students[i])

            const resData = await response.json()

            console.log(resData)

            studentIds.push(resData.id)

        }

        console.log(studentIds)

        const response = await ApiRequest(CreateClassUrl, 'POST', { name: 'name', listOfStudentsID: studentIds })

        const resdata = await response.json()

        console.log(resdata)

        navigate(`/klassekart/${resdata.id}`)




        // for (let i = 0; i < classes.length; i++) {
        //     const random = Math.floor(Math.random() * i)

        //     console.log(random)
        // }


        // setGenerated(true)
    }

    function addName() {

        if (inputValue !== '') {

            if (students === null) return

            const age = Math.floor(Math.random() * 50)

            const user = {
                name: inputValue,
                age: age
            }

            setStudents([...students, user])

        } else {
            alert("Please enter a value")
        }
    }


    return (
        <div className='main'>
            <div className='create'>
                <h1 className='title'>Generer ditt eget klassekart!</h1>
                <div className='add'>
                    <input type="text" placeholder='Enter a name' onChange={(e) => setInputValue(e.target.value)} />
                    <button className='' onClick={addName}>Legg til</button>
                </div>
                <div className='elever'>
                    {students.length === 0 ? null : (
                        <>
                            <div className='blurball'></div>
                            <h1 className='under-title'>Elever</h1>
                            <ul>
                                {students.map((element, index) => (
                                    <li key={index}>{element.name}</li>
                                ))}
                            </ul>
                            <button className='generate' onClick={() => handleGeneration()}>Generer Klasse Kart</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateKlassekart