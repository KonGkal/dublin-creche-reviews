import { useState } from "react";
import "./ReviewForm.css";
import SchoolFormContainer from "../schoolForm/SchoolFormContainer";
import { createReview } from "../../services/apiService";

import { useSelector } from "react-redux";

const ReviewForm = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const { user } = useSelector((state) => state.user);
  const [userDetails] = user;

  const [facility, setFacility] = useState("");
  const [staff, setStaff] = useState("");
  const [services, setServices] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    await createReview(
      facility,
      staff,
      services,
      comment,
      userDetails.id,
      selectedSchool
    );

    setFacility("");
    setStaff("");
    setServices("");
    setComment("");
  };

  return (
    <>
      <h1 className="header">Leave a Review</h1>
      <div className="school-list review-form shadow-and-border">
        <SchoolFormContainer
          selectedSchool={selectedSchool}
          setSelectedSchool={setSelectedSchool}
        />
        <form onSubmit={submitHandler}>
          <div className="school-form-container shadow-and-border">
            <h1 className="form-title">Create a Review</h1>
            <div className="school-form-container">
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
            </div>
            <h5>Comment</h5>

            <div className="school-form-container">
              <input
                className="comment"
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
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;