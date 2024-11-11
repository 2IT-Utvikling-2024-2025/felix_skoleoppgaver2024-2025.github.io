import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/klassekart')
    }, [])

    return (
        <div>Main</div>
    )
}

export default Main