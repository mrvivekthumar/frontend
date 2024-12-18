import React from 'react'
import Sidenav from './Partials/Sidenav'
import HorizontalCards from './Partials/HorizontalCards'

const Home = () => {
    return (
        <div className='bg-blue-400 w-screen h-screen flex'>
            <Sidenav />
            <div className=' flex flex-col'>
                <h1 className='text-3xl font-semibold text-zinc-400 flex'>Trending </h1>
                <HorizontalCards />
            </div>

        </div>
    )
}

export default Home