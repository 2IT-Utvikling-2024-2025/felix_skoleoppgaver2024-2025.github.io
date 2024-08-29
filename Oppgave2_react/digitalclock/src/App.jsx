import React, { useState, useEffect } from 'react'


const App = () => {

    const [time, setTime] = useState(Date.now())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className='w-screen h-screen flex items-center justify-center bg-[#110119] flex-col'>
            <h1 className='text-5xl text-white font-bold'>Digital Clock</h1>
            <div className='mb-10 mt-4 w-96 h-1 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 '></div>
            <h1 className='text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 bg-clip-text text-transparent p-10 border-[1px] rounded-lg shadow-sm border-purple-500 '>{`${new Date(time).toLocaleTimeString()}`}</h1>
        </main>
    )
}

export default App