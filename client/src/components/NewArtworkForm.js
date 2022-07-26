import React, { useState} from 'react'

   
//set controlled form
//add onSubmit to capture event 
//set router 
//use param hook
//push method to push new info to app





function NewArtworkForm({seed, setSeed, isPosted, setIsPosted}) {
  //declare state-medium, artist, title, year, image
  const [reviews, setReviews] = useState("");
 
 
 

  //handle submit
  //POST method

  function handleSubmit(e) {
    e.preventDefault(); //prevent page from refreshing
//fetch request with POST
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        review : reviews
       
        
       
       
      }),
    })
    .then(setIsPosted(!isPosted))

    
    //   .then((response)  => response.json())
    //   .then((isPosted) => setIsPosted(isPosted));
    // //add new artwork to page
  }





  return (
//include text input area with states
//target input value for users to enter information
    <div >


      <h2 class="add-artwork">add comment</h2>
       <form class="artwork-form"onSubmit={handleSubmit}>
          
           <input
          type="text"
          
          placeholder="How was your trip"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
          />
         
           <button type="submit">spark it</button>
        </form>
    </div>
  );
}

export default NewArtworkForm;