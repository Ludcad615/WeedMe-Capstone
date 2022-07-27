import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavLink } from "react-router-dom"

function NavBar() {
  let navigate = useNavigate()
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res)=> {
      if (res.ok) {
        navigate("/");
      }
    })

  }

  return (
    <nav>
      <div>
      <NavLink to="/home">
              <button className="btn text-dark">
                Home
                </button>
      </NavLink>
     
      <NavLink to="/reviews=" >
            <button className="btn text-dark"> 
            Reviews
            </button>
      </NavLink>
      <NavLink to="/about">
              <button className="btn text-dark">
                About
                </button>
      </NavLink>
       
              <button onClick={handleLogOut} className="btn text-dark">
                Log Out
                </button>
      
      </div>
    </nav>
  )
}
export default NavBar