import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='Nav-container'>
      <div className='header'><h1>Top Courses</h1></div>
      
      <div className='nav'> 

      <ul>
        <li>
          <Link to='/courses'>All</Link>
        </li>
        <li>
          <Link to='/courses/development'>Development</Link>
        </li>
        <li>
          <Link to='/courses/design'>Design</Link>
        </li>
        <li>
          <Link to='/courses/business'>Business</Link>
        </li>
        <li>
          <Link to='/courses/lifestyle'>LifeStyle</Link>
        </li>
        
      </ul>
      </div>

    </div>
    </>
  )
}

export default Navbar