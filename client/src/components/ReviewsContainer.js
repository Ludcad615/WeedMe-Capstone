import React from 'react'

import ForrestReviews from './ForrestReviews'



function ReviewsContainer({artworks}) {

  const artworkCard = artworks.map((artwork)=> (
      <ForrestReviews 
        key={artwork.id}
        artwork={artwork}
    
      />
  ))
  


  return (
    <ul className="cards" >
      {artworkCard} 
    </ul>
  )
}

export default ReviewsContainer