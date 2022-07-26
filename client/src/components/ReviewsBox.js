import React from 'react'
import { Text, Paper, Image, Space, Group, Button } from "@mantine/core";
import AddReview from './AddReview';


const ReviewsBox = ({
  strainName,
  description,
  image,
  reviewId,
  currentUser,
  strainId,
  getStrains
}) => {
  const handleDelete = () => {
    // setting id variable to review id onclick
    // write a fetch request to delete the review using the id
    let id = reviewId[reviewId.length - 1];
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log("Deleted");
      }
    });
  };

  function handleDeleteComment(){
    handleDelete();
    getStrains();
  
  }

  return (
    <>
      <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
        <Paper shadow="xs" radius="xl" p="md">
          <Image radius="md" src={image} alt={strainName} />
          <Text>{strainName}</Text>
          <Text>{description}</Text>
          <Group position={"apart"}>
            {/* <Button variant="gradient">Edit</Button> */}
            <AddReview
              currentUser={currentUser}
              reviewId={reviewId}
              strainId={strainId}
              getStrains={getStrains}
            />
            <Button variant="gradient" onClick={handleDeleteComment}>
              Delete Review
            </Button>
          </Group>
        </Paper>
        <Space h="lg" />
      </div>
    </>
  );
};

export default ReviewsBox