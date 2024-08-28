import React from 'react'

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center flex-col relative top-40'>
        <div className='text-white text-4xl font-bold '>MY INTERESTS ⭐</div>
        <div className=' bg-gradient-to-r from-primary to-secondary w-[40vw] h-0.5 mt-3'></div>
        <div className='w-[40vw] border-l-[2px] border-primary p-7 mt-10'>
          <div className='flex'>
          <h1 className='text-3xl font-semibold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent h-12'>Programming</h1><h1 className='text-3xl'>🚀</h1>
          </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque sit fugiat nisi quaerat, facere optio quo iure quae sequi nihil culpa! Dolores fugiat autem quis suscipit non, quas magnam.</p>
        </div>
        <div className='w-[40vw] border-r-[2px] border-primary'></div>
    </div>
  )
}

export default Home