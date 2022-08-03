import { ClassNames } from '@emotion/react';
import React, {useState} from 'react'
import { Button, Space, Modal, Group, Textarea } from "@mantine/core";



const AddReview = ({ strains, names, setStrains, strainId, currentUser, getStrains}) => {
  // const [name, setName] = useState("");
  const [comment, setComment] = useState(""); //stands for review dont get confused i fucked up
  const [opened, setOpened] = useState(false);
  console.log("currentUser",currentUser)

  function handleSubmit(e) {
    e.preventDefault(); 
    postReview();
    getStrains();
  }

  function postReview() {
   fetch(`/reviews`, {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({
       //post user_id
       //get the user after i log in pass it downt o this components
       user_id: currentUser.id,
       strain_id: strainId,
       description: comment,
     }),
   })
     .then((response) => response.json())
     .then((res) => {
      setOpened(false);
     }); 
  }


  return (
    <>
      <Modal closeOnConfirm={true} opened={opened} onClose={() => setOpened(false)}>
        <form class="Weed-form" onSubmit={handleSubmit}>
          <Textarea
            placeholder="Leave a WeedMe review"
            label="Leave a review"
            autosize
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minRows={2}
          />
          <Space h="xl" />
          <Button variant="gradient" type="submit">
            Submit Your Review
          </Button>
        </form>
      </Modal>

      <Button size="sm" variant="gradient" onClick={() => setOpened(true)}>
        Leave a review
      </Button>
    </>
  );
};

export default AddReview