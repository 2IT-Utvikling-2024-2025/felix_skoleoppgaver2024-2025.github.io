import React, { useState } from 'react'
import getName from '../funksjoner/getname'

const Kosystem = () => {

    function start() {

        console.log(info)

        const personer = []

        const koerArray = []


        const antallKunder = parseInt(info.kunder)

        for (let i = 0; i < antallKunder; i++) {

            const antallVarer = Math.floor(Math.random() * 40)

            const name = getName()

            const person = {
                name: name,
                antallVarer: antallVarer,
                id: i
            }

            personer.push(person)
        }


        const mengdekoer = parseInt(info.koer) + 1



        for (let i = 0; i < mengdekoer; i++) {
            koerArray.push([])
        }


        let currentStage1 = 0

        let currentStage2 = 0

        const interval1 = setInterval(() => {
            if (currentStage1 > info.steg) {
                clearInterval(interval1)
            } else {

                currentStage1 += 1

                console.log(koerArray)

                if (personer.length <= 0) {
                    console.log("Ingen flere personer i hoved køen")
                    clearInterval(interval1)
                } else if (personer[0].antallVarer < 10) {

                    koerArray[0].push(personer[0])

                    console.log(`${personer[0].name} er nå i ekspress køen`)

                    personer.splice(0, 1)
                    personer.slice('')


                } else {
                    for (let k = 1; k < koerArray.length; k++) {

                        if (koerArray[k].length < info.prko) {

                            console.log(`${personer[0].name} er i kø ${k}`)

                            koerArray[k].push(personer[0])

                            personer.splice(0, 1)
                            personer.slice('')
                        } else {
                            console.log(`${personer[0].name} fikk ikke gått in i kø ${k} fordi den er full!`)
                        }
                    }
                }
            }
        }, 3_000)

        const interval2 = setInterval(() => {

            if (currentStage2 > info.steg) {
                clearInterval(interval2)
            } else {
                for (let i = 0; i < koerArray.length; i++) {

                    currentStage2 += 1

                    if (koerArray[i].length >= 1) {

                        console.log(`${koerArray[i][0].name} forlater nå kø ${i}`)

                        koerArray[i].splice(0, 1)
                        koerArray[i].slice('')

                    }
                }
            }

        }, 10_000)
    }



    const [info, setInfo] = useState({
        koer: 0,
        kunder: 0,
        prko: 0,
        steg: 0,
    })

    return (
        <div>
            <input type="number" placeholder='Antall køer' onChange={(e) => setInfo({ ...info, koer: e.target.value })} />
            <input type="number" placeholder='Antall kunder' onChange={(e) => setInfo({ ...info, kunder: e.target.value })} />
            <input type="number" placeholder='Maks antall personer per kø' onChange={(e) => setInfo({ ...info, prko: e.target.value })} />
            <input type="number" placeholder='Antall steg i simmuleringen' onChange={(e) => setInfo({ ...info, steg: e.target.value })} />
            <button onClick={start}>Start kø</button>
        </div>
    )
}

export default Kosystem