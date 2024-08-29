
import { useState } from "react"
import Votebutton from "./Votebutton"

const Profilepage = () => {

    // const ferdigheter = [
    //     { title: "Utvikling", id: 1 },
    //     { title: "Programming Rizz", id: 2 },
    //     { title: "Programming Trussler", id: 3 },
    //     { title: "Backflip", id: 4 },
    //     { title: "Drikke vann", id: 5 },
    //     { title: "Spise mat", id: 6 }
    // ]


    const [ferdigheter, setFerdigheter] = useState([

        { title: "Utvikling", votes: 0, id: 1 },
        { title: "Programming Rizz", votes: 0, id: 2 },
        { title: "Programming Trussler", votes: 0, id: 3 },
        { title: "Backflip", votes: 0, id: 4 },
        { title: "Drikke vann", votes: 0, id: 5 },
        { title: "Spise mat", votes: 0, id: 6 }
    ])

    function handleClick(id) {

        const ferdighet = ferdigheter[id]

        ferdighet.votes = ferdighet.votes + 1

    }

    return (
        <>
            <main className="w-screen bg-[#0b010f] flex justify-center">
                <section className="pfpsection flex flex-col items-center w-8/12 p-10 ">
                    <img src="/pfp.png" alt="" className="w-56 h-auto mt-10 rounded-full" />
                    <h1 className="displayname text-white text-2xl text-center mt-2">Felix M.T Borrmann</h1>
                    <h1 className="username text-gray-300 font-light text-xl text-center">@felix</h1>
                    <div className="w-full h-0.5 m-5 bg-white"></div>
                    <p className="text-white text-center font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium quidem similique, distinctio aliquam quia placeat nulla vel esse sint libero doloremque dolores ipsa commodi laboriosam quam aspernatur repellat veritatis.</p>
                    <div className="ferdigheter grid grid-cols-3">
                        {ferdigheter.map((ferdighet, index) => (
                            <div key={ferdighet.id} className={`${ferdighet.title}`}>
                                <h1 className="text-2xl text-white">{ferdighet.title}</h1>
                                <p className="text-white text-xl">{ferdighet.votes} Vote/s</p>
                                <button onClick={() => handleClick(index)}>Vote</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profilepage