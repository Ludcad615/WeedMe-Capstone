import React from 'react'
import NavBar from './NavBar'
import WeedContainer from './WeedContainer'

const HomePage = ({data}) => {
  return (
    <div>
        <div>
            <h1>WeedMe</h1>
        </div>
        <NavBar/>
        <div>
            <WeedContainer data={data}/>
        </div>
    </div>
  )
}

export default HomePage