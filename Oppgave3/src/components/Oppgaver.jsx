import React, { useState } from 'react'

const Oppgaver = () => {

    const [cmtommer, cmTommer] = useState('Convert Centimeter til tommer')

    const tallArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    function returnerPartall(tallArray) {

        return tallArray.filter((tall) => tall % 2 === 0)
    }

    const [partallstatus, setPartallStatus] = useState('Resultat')

    const [tilfeldigtall, setTilfeldigtall] = useState('Tilfeldig tall')

    const [erPartal, setErPartal] = useState("")

    const [sumResultat, setSumResultat] = useState("")


    function generertilfeldigtall() {
        const tall1 = Math.floor(Math.random() * 10)
        const tall2 = Math.floor(Math.random() * 10)

        if (tall1 % 2 === 0 && tall2 % 2 === 0) {
            setErPartal("Begge tallene er partall")
        } else if (tall1 % 2 !== 0 && tall2 % 2 !== 0) {
            setErPartal("Begge tallene er odetall")
        } else {
            setErPartal("En av tallene er partall og ett er odetall")
        }

        setTilfeldigtall(`${tall1} + ${tall2} = ${tall1 + tall2}`)

        if (tall1 + tall2 > 10) {
            setSumResultat("Summen er større enn 10")
        } else if (tall1 + tall2 < 10) {
            setSumResultat("Summen er mindre enn 10")
        } else {
            setSumResultat("Summen er lik 10")
        }
    }

    function converter(inputvalue) {
        cmTommer(`${inputvalue} centimeter er ${inputvalue * 0.3937} tommer`)
    }

    function isPartall(inputvalue) {
        if (!inputvalue) {
            setPartallStatus('Skriv inn verdi')
        } else if (inputvalue % 2 === 0) {
            setPartallStatus(`${inputvalue} er partall`)
        } else {
            setPartallStatus(`${inputvalue} er ikke partall`)
        }
    }

    return (
        <div>
            <h1>{cmtommer}</h1>
            <input type="number" onChange={(e) => converter(e.target.value)} placeholder='Skriv verdi i centimeter' />
            <h1>{partallstatus}</h1>
            <input type="number" onChange={(e) => isPartall(e.target.value)} placeholder='Skriv verdi' /><br />
            <button onClick={() => console.log(returnerPartall(tallArray))}>Kjør funksjon</button><br />
            <h1>{tilfeldigtall}</h1>
            <h1>{erPartal}</h1>
            <h1>{sumResultat}</h1>
            <button onClick={generertilfeldigtall}>Generer tilfeldig tall</button>
        </div>
    )
}

export default Oppgaver