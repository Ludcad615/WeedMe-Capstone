import React from "react";
import NavBar from "./NavBar";
import ReviewsBox from "./ReviewsBox";
import { SimpleGrid } from "@mantine/core";
import AddReview from "./AddReview";

function StrainReviews({ weedstrains,currentUser }) {
  const reviews = weedstrains.map((strain) => {
    let title = strain.strain_name;
    let image = strain.image;
    let strainId = strain.id;
    let reviewId = [];
    let review = strain.reviews.map((review) => {
      reviewId.push(review.id);
      return <p>{review.description}</p>
    });

    return (
      <div key={strainId}>
        <ReviewsBox
          key={strainId}
          strainName={title}
          description={review}
          image={image}
          reviewId={reviewId}
          strainId={strainId}
          currentUser={currentUser}
        />
      </div>
    );
  });

  return (
    <div>
      <NavBar />
      <SimpleGrid cols={4}>{reviews}</SimpleGrid>
      <AddReview currentUser={currentUser} />
    </div>
  );
}

export default StrainReviews;
