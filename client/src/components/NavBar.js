import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavLink } from "react-router-dom"
import { Button, Space, Group} from "@mantine/core"

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
    <>
  <Group position="apart">
    <NavLink to="/home">
       <Button >
          Home
        </Button>
      </NavLink>
      <NavLink to="/reviews" >
       <Button> 
         Reviews
       </Button>
      </NavLink>
              <Button onClick={handleLogOut} >
                Log Out
                </Button>
   </Group>
   <Space h="md"/>
    </>
  )
}
export default NavBar