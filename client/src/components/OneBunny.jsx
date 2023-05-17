import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../App.css"


const OneBunny = (props) => {
    const {id} = useParams(); //we use useParams b/e we want to bring in our props thats going to be from our link, and then we use useParams to get our id
    const navigate = useNavigate();

    const [oneBunny, setOneBunny] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/bunnies/${id}`)
            .then(res => setOneBunny(res.data.bunny))
            .catch(err => console.log(err))
    }, [])

    // Delete A Bunny
    const deleteBunny = (e) => {
        axios.delete(`http://localhost:8000/api/bunnies/${id}`)
            .then(res => navigate("/api/bunnies"))  
            .catch(err => console.log(err))
        navigate("/api/bunnies")
    }

    const navigateToEditBunny = (e) => {
        navigate(`/api/bunnies/${id}/edit`)
    }

  return (
    <div>
        
        <h1>{oneBunny.title}</h1>
        <h6>By: {oneBunny.name}</h6>
        <p className="col-md-6 mx-auto">{oneBunny.desc}</p>

        <button className="btn btn" onClick={(e) => navigateToEditBunny(oneBunny._id)}>Edit Bunny</button>
        <button className="btn2 btn" onClick={deleteBunny}>Delete Bunny</button>
    </div>
  )
}

export default OneBunny