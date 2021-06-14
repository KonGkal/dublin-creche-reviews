import { deleteReview } from "../../services/apiService";

const UserReview = ({ review, setUserReviews }) => {
  const { id, facility, staff, overall, services, comment } = review;

  const deleteReviewHandler = async () => {
    await deleteReview(id);
    setUserReviews((prev) => prev.filter((review) => review.id !== id));
  };
  return (
    <li className="listed-reviews shadow-and-border">
      <div>
        <b>Overall User Rating:</b> {overall}
      </div>
      <div>
        <b>Facility:</b> {facility}
      </div>
      <div>
        <b>Staff:</b> {staff}
      </div>
      <div>
        <b>Services:</b> {services}
      </div>
      <div>
        <b>Comment:</b>
        {comment}
      </div>
      <div className="button-container">
        <button className="delete-button" onClick={deleteReviewHandler}>
          <span>❌</span>
        </button>
      </div>
    </li>
  );
};

export default UserReview;
