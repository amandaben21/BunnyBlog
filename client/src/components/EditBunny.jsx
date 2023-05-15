import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


const EditBunny = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneBunny, setOneBunny] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/bunnies/${id}`)
            .then(res => setOneBunny(res.data.bunny))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneBunny({
            ...oneBunny,
            [e.target.name]: e.target.value
        })
    }

    const editBunny = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/bunnies/${id}`, oneBunny)
            .then(res => navigate("/api/bunnies"))
            .catch(err => console.log(err))
    }



  return (
    <div>
        <h1 className="mx-auto">Edit Bunny Blog</h1>
        <form action="" className="col-md-6 mx-auto" onSubmit={editBunny}>
            <div className="form-group">
                <label htmlFor="title">Title of Your Bunny Blog:</label>
                <input type="text" name="title" id="title" className="form-control" value={oneBunny.title} onChange={changeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" name="name" id="name" className="form-control" value={oneBunny.name} onChange={changeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="desc">Write your Blog:</label>
                <input type="textarea" name="desc" id="desc" className="form-control" value={oneBunny.desc} onChange={changeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Edit Bunny</button>
        </form>
    </div>
  )
}

export default EditBunny