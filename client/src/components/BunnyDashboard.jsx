import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';


const BunnyDashboard = () => {
    const [bunnies, setBunnies] = useState([]) //we need this to be an array b/c we are going to iterate with our .map() function to show the list in our dashboard
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/bunnies')
            .then(res => setBunnies(res.data.bunnies))
            .catch(err => console.log(err))
    }, []) // we have the dependecy array so we wont get into a loop

    // navigate to Bunny form
    const navigateToBunnyForm = () => {
        navigate("/api/bunnies/create")
    }

    const deleteBunny = (id) => {
        axios.delete(`http://localhost:8000/api/bunnies/${id}`)
            .then(res => {
                const filteredBunnies = bunnies.filter(bunny => bunny._id !== id)
                setBunnies(filteredBunnies)
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1 className='mx-auto center'>Bunny Blogs!</h1>
        <table className="col-md-6 mx-auto mt-4">
            <thead>
                <tr>
                    <th>Title of Blogs!</th>
                    <th>By:</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {bunnies.map((bunny) => {
                    return(
                        <tr key={bunny._id}>
                            <td><Link to={`${bunny._id}`}>{bunny.title}</Link></td>
                            <td>{bunny.name}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e) => deleteBunny(bunny._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className="btn btn-info offset-5 mt-3" onClick={navigateToBunnyForm}>Create a Bunny Blog!</button>
    </div>
  )
}

export default BunnyDashboard