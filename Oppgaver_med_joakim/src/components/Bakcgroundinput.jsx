import React, { useState } from 'react'

const Bakcgroundinput = () => {

    const [background, setBackground] = useState("#150010")


    return (
        <div className='inputBackground' style={{ backgroundColor: background }}>

            <h1>Enter a background color!</h1>
            <input type="color" className='color-inp' onChange={(e) => { setBackground(e.target.value) }} />
        </div>
    )
}

export default Bakcgroundinput