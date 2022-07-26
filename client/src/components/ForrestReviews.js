import React,{useState, useEffect} from 'react'
import NewArtworkForm from './NewArtworkForm'

function ForrestReviews({artwork}) {
  const [like, setLike] = useState(true)
  const [isPosted, setIsPosted] = useState(false)
  const {name, strain_id, reviews, 
    image="https://images.leafly.com/flower-images/gelato.jpg"} = artwork
// console.log(artwork.reviews.review)


// console.log(reviews)



// const [weed, setWeed] = useState([]) 

// useEffect(() => {
//   fetch ("http://localhost:9292/strains")
//   .then ((r) => r.json())
//   .then (setWeed)
// }, [])

// function addNewArtwork(newArtwork) {
  const [weed, setWeed] = useState([]) 

useEffect(() => {
  fetch ("http://localhost:9292/strains")
  .then ((r) => r.json())
  .then ((weed)=>setWeed(weed))
}, [isPosted])



  // const updatedArtworkArray = [...weed, newArtwork];
  // setWeed(updatedArtworkArray);



const weedRe = reviews.map((allReviews)=> (
     <li className="strainType">{allReviews.review}</li>
  ))

  function handleToggleClick (){
    setLike((like) => !like)
}



  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className="title">{strain_id}</p>
       <ul className="strainType">{weedRe}</ul>
   

      <NewArtworkForm seed={weed} setSeed={setWeed} setIsPosted={setIsPosted} isPosted={isPosted} />
      {like ? (
        <button className="button"onClick={handleToggleClick}>♡</button>
      ) : (
        <button className="button" onClick={handleToggleClick}>♥</button>
      )
      }
    </li>
  )

    }

export default ForrestReviews