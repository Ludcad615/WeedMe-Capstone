import React, {useState, useEffect} from 'react'
import Header from "./Header"
import About from "./About"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import ArtworkContainer from "./ArtworkContainer"
import NewArtworkForm from "./NewArtworkForm"
import Database from "./Database"
import { Route, Switch } from "react-router-dom";
import ReviewsContainer from './ReviewsContainer'
import AddingReviews from './AddingReviews'

function App() {

  const [artworks, setArtworks] = useState([]) 
  const [search, setSearch] = useState("") 

  
  useEffect(() => {
    fetch ("http://localhost:9292/strains")
    .then ((r) => r.json())
    .then (setArtworks)
  }, [])

  // console.log(artworks)

  const displayArtworks = artworks.filter((artwork) => 
      Object.values(artwork).join(" ").toLowerCase().includes(search.toLowerCase())
  )

  function addNewArtwork(newArtwork) {
    const updatedArtworkArray = [...artworks, newArtwork];
    setArtworks(updatedArtworkArray);
  }



  return (
    <div>

      <Header />
      <NavBar />
        <Switch>      
          <Route path="/about">
              <About />
          </Route>
         
          <Route  path="/form">
              <AddingReviews artworks={artworks} />
          </Route>
          < Route exact path="/">
              <SearchBar searchTerm={search} onSearchChange={setSearch}/>
              <ArtworkContainer artworks={displayArtworks}/>
           </Route>
      </Switch>
    </div>
  )
}

export default App