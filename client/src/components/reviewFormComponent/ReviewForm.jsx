import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addNewUser, findUserbyEmail } from "../../services/apiService";
import "./ReviewForm.css";
import SchoolFormContainer from "../schoolFormComponent/SchoolFormContainer";
import SelectedSchoolContext from "../../context/SelectedSchoolContext";
import { useParams } from "react-router-dom";
import ReviewsContext from "../../context/ReviewsContext";

const ReviewForm = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();
  const { email } = user;
  const { reviews, setReviews } = useContext(ReviewsContext);
  console.log(selectedSchool);

  const getAllUsers = async () => {
    try {
      const token = await getAccessTokenSilently();

      const res = await fetch(`http://localhost:3001/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const isExistingUser = (userEmail) => {
    getAllUsers().then((res) => {
      if (res.filter((user) => user.email === userEmail).length === 0)
        addNewUser(email);
    });
  };

  isExistingUser(email);

  useEffect(() => {
    findUserbyEmail(email).then((user) => {
      setUserDetails(user);
    });
  }, [email]);
  console.log(userDetails);

  const [facility, setFacility] = useState("");
  const [staff, setStaff] = useState("");
  const [services, setServices] = useState("");
  const [comment, setComment] = useState("No Comment");

  const submitHandler = async (event) => {
    event.preventDefault();

    // const newReview = await createReview(facility, staff, services, comment);

    setFacility("");
    setStaff("");
    setServices("");
    setComment("");
  };

  return (
    <div>
      <SelectedSchoolContext.Provider
        value={{ selectedSchool, setSelectedSchool }}
      >
        <SchoolFormContainer />
      </SelectedSchoolContext.Provider>

      <form onSubmit={submitHandler}>
        <div className="form-container">
          <h1 className="form-title">Create a Review</h1>

          <h5>FACILITY</h5>

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

          <h5>STAFF</h5>

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

          <h5>SERVICES</h5>

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
