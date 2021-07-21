import { createContext } from "react";
const ReviewsContext = createContext<ReviewState>(
  {
    reviews: [],
    setReviews: () => undefined
  }
  );

export default ReviewsContext;
