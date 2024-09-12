import React, { useState, useEffect } from 'react'
import Explosion from '../components/Explosion'

const Countdown = () => {

    const [time, setTime] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            if (time == 0) {
                setTimeout(() => {
                    setTime(10)
                }, 600)
            } else {
                setTime(time - 1)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return (
        <main className='Clockdiv'>
            {time == 0 ? <Explosion /> : (
                <div className='Clock-content'>
                    <h1 className='clock-h1'>Digital Clock</h1>
                    <div className='clock-bar'></div>
                    <p className='clock-p'>{time}</p>
                </div>
            )}
        </main>
    )
}

export default Countdown