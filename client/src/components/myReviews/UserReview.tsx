import { deleteReview } from "../../services/apiService";
import { useSelector } from "react-redux";
import { schoolsSelector } from "../../store/store";
import { ReviewInterface } from "../../interfaces/types";

const UserReview = ({
  review,
  setUserReviews,
}: {
  review: ReviewInterface;
  setUserReviews: Function;
}) => {
  const { id, facility, staff, overall, services, comment, SchoolId } = review;

  const { schools } = useSelector(schoolsSelector);

  const schoolName =
    schools && schools.filter((school) => school.id === SchoolId);

  const deleteReviewHandler = async () => {
    await deleteReview(id);
    setUserReviews((prev: ReviewInterface[]) =>
      prev.filter((review) => review.id !== id)
    );
  };
  return (
    <li className="listed-reviews shadow-and-border">
      <div>
        <b>SchoolName:</b> {schoolName.length && schoolName[0].name}
      </div>
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
        <button
          aria-label="delete-button"
          className="delete-button"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              deleteReviewHandler();
          }}
        >
          <span>❌</span>
        </button>
      </div>
    </li>
  );
};

export default UserReview;
