import React, {useState, useEffect} from 'react'
import LandingPage from './components/LandingPage';
import {Route, Routes}  from "react-router-dom"
import "./App.css";
import HomePage from './components/HomePage';
import StrainReviews from './components/StrainReviews';



function App() {
  const [weedstrains, setWeedstrains] = useState([])  
  // const [comments, setComments] = useState([]) 
  const [currentUser, setCurrentUser] = useState(null)

  function getStrains() {
        fetch("http://localhost:4000/strains")
          .then((r) => r.json())
          .then(setWeedstrains); 
  }

    function fetchUser() {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  } 

    useEffect(() => {
      getStrains();
      fetchUser();
    }, []);

  // console.log(currentUser)

  

  return (
    <div>
      <Routes>
        <Route
          path="/reviews"
          element={
            <StrainReviews
              weedstrains={weedstrains}
              currentUser={currentUser}
              getStrains={getStrains}
            />
          }
        />
        <Route path="/" element={<LandingPage fetchUser={fetchUser} />} />
        {/* this route is created to make the first  page  the landing page*/}
        <Route path="/home" element={<HomePage data={weedstrains} />} />
      </Routes>
    </div>
  );
}

export default App