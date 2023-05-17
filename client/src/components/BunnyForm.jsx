import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BunnyForm = () => {
  const [bunny, setBunny] = useState({
    title: '', //must match the same in your models in server
    name: '', //must match the same in your models in server
    desc: '' //must match the same in your models in server
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (e) => { //updates my Bunny
    setBunny({
      ...bunny,
      [e.target.name]: e.target.value,
    });
  };

  const formValidator = () => { //validators must be the same as models validators
    let isValid = true;
    if (bunny.title.length < 3) {
      return false;
    }
    if (bunny.name.length < 3) {
      return false;
    }
    if (bunny.desc  < 3) {
        return false;
      }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidator()) {
      axios.post('http://localhost:8000/api/bunnies', bunny)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      navigate('/api/bunnies');
    }

    if (errors) {
      setErrors({
        title: "Title of Bunny Blog is required at least 3 characters",
        name: "Your name is required at least 3 characters",
        desc: "Your writing is required at least  characters"
      });
    }
  };



  return (
    <div>
      <h1>Add a new Bunny</h1>
      <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        {errors.title ? <p className="text-danger">{errors.title}</p> : ''}
        {errors.name ? <p className="text-danger">{errors.name}</p> : ''}
        {errors.desc ? <p className="text-danger">{errors.desc}</p> : ''}
        
        <div className="form-group">
          <label htmlFor="title">Title of Your Bunny Blog:</label>
          <input type="text" className="form-control" name="title" id="title" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
        <label htmlFor="name">Write  your Blog:</label>
          {/* <label htmlFor="desc">Write your Blog:</label> */}
          <textarea rows={7} className="form-control" name="desc" id="desc" onChange={onChangeHandler} />
        </div>

        <button className="btn btn-info mt-3">Add Your Bunny Blog</button>
      </form>
    </div>
  );
};

export default BunnyForm;