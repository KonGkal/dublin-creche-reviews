import { useState, useContext } from "react";
import "./ReviewForm.css";
import SchoolFormContainer from "../schoolForm/SchoolFormContainer";
import SelectedSchoolContext from "../../context/SelectedSchoolContext";
import ReviewsContext from "../../context/ReviewsContext";
import { createReview } from "../../services/apiService";
import UserDetailsContext from "../../context/UserDetailsContext";

const ReviewForm = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const { setReviews } = useContext(ReviewsContext);

  const { userDetails } = useContext(UserDetailsContext);

  const [facility, setFacility] = useState("");
  const [staff, setStaff] = useState("");
  const [services, setServices] = useState("");
  const [comment, setComment] = useState("No Comment");

  const submitHandler = async (event) => {
    event.preventDefault();

    const newReview = await createReview(
      facility,
      staff,
      services,
      comment,
      userDetails[0].id,
      selectedSchool
    );
    setReviews((prev) => [...prev, newReview]);

    setFacility("");
    setStaff("");
    setServices("");
    setComment("");
  };

  return (
    <div className="form-container">
      <SelectedSchoolContext.Provider
        value={{ selectedSchool, setSelectedSchool }}
      >
        <SchoolFormContainer />
      </SelectedSchoolContext.Provider>

      <form onSubmit={submitHandler}>
        <div>
          <h1 className="form-title">Create a Review</h1>

          <h5>Facility</h5>

          <select
            value={facility}
            name="facility"
            onChange={(e) => setFacility(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <h5>Staff</h5>

          <select
            value={staff}
            name="staff"
            onChange={(e) => setStaff(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <h5>Services</h5>

          <select
            value={services}
            name="services"
            onChange={(e) => setServices(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h5>COMMENT</h5>

          <input
            value={comment}
            name="comment"
            placeholder="Insert a comment"
            onChange={(e) => setComment(e.target.value)}
            type="text"
          />

          <button type="submit" disabled={!facility || !staff || !services}>
            Create Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
