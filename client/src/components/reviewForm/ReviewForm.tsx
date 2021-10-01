import { FormEvent, useState } from "react";
import "./ReviewForm.css";
import SchoolFormContainer from "../schoolForm/SchoolFormContainer";
import { createReview } from "../../services/apiService";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/store";
import DynamicSelect from "../DynamicSelect/DynamicSelect";

const ReviewForm = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const { user } = useSelector(userSelector);
  const [userDetails] = user;

  const [facility, setFacility] = useState("");
  const [staff, setStaff] = useState("");
  const [services, setServices] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
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

              <DynamicSelect
                selectValue={facility}
                selectName="facility"
                set={setFacility}
                range={6}
              />

              <h5>Staff</h5>

              <DynamicSelect
                selectValue={staff}
                selectName="staff"
                set={setStaff}
                range={6}
              />

              <h5>Services</h5>

              <DynamicSelect
                selectValue={services}
                selectName="services"
                set={setServices}
                range={6}
              />
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
