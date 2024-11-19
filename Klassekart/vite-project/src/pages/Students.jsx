import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ApiRequest } from '../functions/apicalls'
import { CreateStudentUrl } from '../variables.json'

export default function Students() {


    const { id } = useParams()

    const navigate = useNavigate()

    const [user, setUser] = useState(undefined)

    useEffect(() => {

        (async () => {

            const response = await ApiRequest(`${CreateStudentUrl}/${id}`, 'GET')

            if (!response) navigate('/')

            const resData = await response.json()

            console.log(resData)

            setUser(resData)

        })()

    }, [])

    async function handleDelete() {
        const response = await ApiRequest(`${CreateStudentUrl}/${id}`, 'DELETE')


        console.log('Response:' + response)

        if (!response) return


        if (response.ok) history.back()

    }

    return (
        <div className="student">
            <h1 className="student-title">Student</h1>
            {user == undefined ? null : (
                <div className="student-stuff">
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                    <button onClick={() => handleDelete()}>Delete</button>
                </div>
            )}
        </div>
    )
}