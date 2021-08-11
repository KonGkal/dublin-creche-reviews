import "./ListedReview.css";
import { ReviewInterface } from "../../interfaces/types";

const ListedReview = ({ review }: { review: ReviewInterface }) => {
  const { facility, staff, services, overall, comment } = review;
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
        <b>Comment:</b> {comment}
      </div>
    </li>
  );
};

export default ListedReview;
