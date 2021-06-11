import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getAllUsers,
  addNewUser,
  findUserbyEmail,
} from "../../services/apiService";
import "./ReviewForm.css";

const ReviewForm = () => {
  const { user } = useAuth0();
  const { email } = user;

  const isExistingUser = (userEmail) => {
    getAllUsers().then((res) => {
      if (res.filter((user) => user.email === userEmail).length === 0)
        addNewUser(email);
    });
  };

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    isExistingUser(email);
    findUserbyEmail(email).then((user) => {
      setUserDetails(user);
    });
  }, []);

  console.log(userDetails);

  const [facility, setFacility] = useState("");
  const [staff, setStaff] = useState("");
  const [services, setServices] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // createReview(facility, staff, services, comment = "No Comment" )

    setFacility("");
    setStaff("");
    setServices("");
    setComment("");
  };

  return (
    <div>
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
