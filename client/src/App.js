import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'; is in src folder-> in index.js file
import BunnyForm from './components/BunnyForm';
import BunnyDashboard from './components/BunnyDashboard';
import OneBunny from './components/OneBunny';
import EditBunny from './components/EditBunny';
import Navbar from './components/Navbar';
import HomeDesign from './components/HomeDesign';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/bunnies")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <HomeDesign/>
      <Routes>
        < Route element={<BunnyForm/>} path="api/bunnies/create" />
        < Route element={<BunnyDashboard/>} path="api/bunnies" />
        < Route element={<OneBunny/>} path="api/bunnies/:id" />
        < Route element={<EditBunny/>} path="api/bunnies/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;