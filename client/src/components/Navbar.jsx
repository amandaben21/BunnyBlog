import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/api/bunnies">Home</Link>
        {/* <Link to="/api/bunnies/create">Create A Bunny</Link> */}
    </div>
  )
}

export default Navbar