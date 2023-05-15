import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <h4><strong>Welcome to Bunny Blog!</strong></h4>
      <Link to="/api/bunnies">Home</Link>
    </div>
    
  )
}

export default Navbar