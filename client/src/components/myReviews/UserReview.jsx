import { deleteReview } from "../../services/apiService";

const UserReview = ({ review, setUserReviews }) => {
  const { id, facility, staff, overall, services, comment } = review;

  const deleteReviewHandler = async () => {
    await deleteReview(id);
    setUserReviews((prev) => prev.filter((review) => review.id !== id));
  };
  return (
    <li className="listed-reviews">
      <div>Facility: {facility}</div>
      <div>Staff: {staff}</div>
      <div>Services: {services}</div>
      <div>Overall User Rating: {overall}</div>
      <div>{comment}</div>
      <button onClick={deleteReviewHandler}>Delete</button>
    </li>
  );
};

export default UserReview;
