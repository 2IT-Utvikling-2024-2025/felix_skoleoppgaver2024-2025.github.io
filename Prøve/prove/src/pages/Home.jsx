import React from 'react'

const Home = () => {
  return (
    <section className='main'>
      <h1>Ett kult navn eller no</h1>
      <p>En litt lengere undertekst med flere kule ting som ikke er i tittelen</p>
      <div className='homepagebuttons'>
        <a href="/weather"><button>Weather</button></a>
        <a href="/exchange"><button>Currency Exchange</button></a>
      </div>
    </section>
  )
}

export default Home
