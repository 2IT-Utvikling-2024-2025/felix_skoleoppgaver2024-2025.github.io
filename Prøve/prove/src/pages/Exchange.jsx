import React, { useEffect, useState } from 'react'

const Exchange = () => {

    const [countryInfo, setCountryInfo] = useState({
        selected: false,
        currencyName: '',
        countryName: '',
        math: ''
    })

    const [inputValue, setInputValue] = useState('')

    const [conversion, setConversion] = useState(0)

    function calculate(e) {
        setConversion(e * countryInfo.math)
    }

    return (
        <div>
            <h1>Select the country which you would like to convert your NOK to</h1>
            <div className='buttondiv'>
                <button onClick={() => setCountryInfo({ ...countryInfo, countryName: 'sweeden', currencyName: 'SEK', math: 0.96, selected: true })}>Sweeden</button>
                <button onClick={() => setCountryInfo({ ...countryInfo, countryName: 'norway', currencyName: 'Euro', math: 0.085, selected: true })}>Finland</button>
                <button onClick={() => setCountryInfo({ ...countryInfo, countryName: 'denmark', currencyName: 'DK', math: 0.63, selected: true })}>Denmark</button>
                <button onClick={() => setCountryInfo({ ...countryInfo, countryName: 'iceland', currencyName: 'ISK', math: 12.63, selected: true })}>Iceland</button>
            </div>
            <div>
                {!countryInfo.selected ? <p>No country selected</p> : (
                    <div>
                        <input type="number" onChange={(e) => calculate(e.target.value)} />
                        <h1>Result: {inputValue} NOK is the same as {conversion.toFixed(2)} {countryInfo.currencyName}</h1>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Exchange