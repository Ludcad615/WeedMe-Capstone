import React, {useState, useEffect} from 'react'
import LandingPage from './components/LandingPage';
import {Route, Routes}  from "react-router-dom"
import "./App.css";
import HomePage from './components/HomePage';

function App() {
  const [weedstrains, setWeedstrains] = useState([])  

  
  useEffect(() => {
    fetch ("http://localhost:4000/strains")
    .then ((r) => r.json())
    .then (setWeedstrains); 
    fetchUser()
  }, [])

    function fetchUser() {
    fetch("/auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      }
    });
  }

  return (
    <div>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
   {/* this route is created to make the first  page  the landing page*/}
    <Route path="/home" element={<HomePage data={weedstrains}/>}/>
   </Routes>
    
      
    </div>
    
  )
}

export default App