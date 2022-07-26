import React from 'react'

import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <div>
      <NavLink to="/">
              <button class="btn text-dark">
                The Forest
                </button>
      </NavLink>
     
      <NavLink to="/form" >
            <button class="btn text-dark"> 
            High Thoughts
            </button>
      </NavLink>
      <NavLink to="/about">
              <button class="btn text-dark">
                About
                </button>
      </NavLink>
      </div>
    </nav>
  )
}
export default NavBar