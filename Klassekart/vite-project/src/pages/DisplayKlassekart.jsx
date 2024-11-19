import { useEffect, useState } from "react"
import { ApiRequest } from '../functions/apicalls'
import { CreateClassUrl } from '../variables.json'
import { useNavigate, useParams } from "react-router-dom"

export default function DisplayKlassekart() {

    const [classes, setClasses] = useState(undefined)

    const { id } = useParams()

    const navigate = useNavigate()



    useEffect(() => {

        (async () => {
            const response = await ApiRequest(`${CreateClassUrl}/${id}`, 'GET')

            if (!response) return navigate('/klassekart')

            const resData = await response.json()

            setClasses(resData)
        })()

    }, [])


    return (
        <div className='klassekart'>
            {classes == undefined ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <h1>{classes.name}</h1>
                    <div className='teacherdesk'><h3>Teacher Desk</h3></div>
                    <div className='grid-class'>
                        {classes.students.map((element, id) => (
                            <>
                                <div onClick={() => { navigate(`/student/${element.id}`) }} key={element.id} className='desks'>
                                    <h3>{element.name}</h3>
                                </div>
                                {id % 4 === 1 ? <div></div> : null}
                            </>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}