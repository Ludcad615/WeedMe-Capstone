import React, { useState } from 'react'
import NewArtworkForm from './NewArtworkForm'
import ReviewsContainer from './ReviewsContainer'



function AddingReviews() {
    const [isPosted, setIsPosted] = useState(false) 
    return (
      <div className='page'>
        <NewArtworkForm posted={setIsPosted} isPosted={isPosted}/>
        <ReviewsContainer isPosted={isPosted}/>
      </div>
    )
  }
  
  export default AddingReviews