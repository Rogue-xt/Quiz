import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mt-5'>
        <br />
        <br />
        <br />
         <h1> Quiz by Developer</h1>
        <div className='text-center mt-5' >
        <Link to={'/quiz'}>
            <button className='btn btn-primary'>Start Quiz</button>
        </Link>
        </div>
    </div>
  )
}

export default Home