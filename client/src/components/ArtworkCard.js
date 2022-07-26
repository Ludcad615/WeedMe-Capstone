import React,{useState} from 'react'


function ArtworkCard({artwork}) {
  const [like, setLike] = useState(true)
  
  const {description, name, strain_id, reviews, 
    image="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg"} = artwork


const weedRe = reviews.map((allReviews)=> (
     <li>{allReviews.review}</li>
  ))

  function handleToggleClick (){
    setLike((like) => !like)
}



  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className="title">{strain_id}</p>
      <p className="strainType">{description}</p>
      {/* <p className="strainType">{review}</p> */}
      {/* <li className="strainType">{weedRe}</li> */}
      {/* <NewArtworkForm/> */}
      {like ? (
        <button className="button"onClick={handleToggleClick}>♡</button>
      ) : (
        <button className="button" onClick={handleToggleClick}>♥</button>
      )
      }
    </li>
  )
}



export default ArtworkCard