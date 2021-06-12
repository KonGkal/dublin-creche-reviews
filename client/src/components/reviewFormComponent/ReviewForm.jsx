import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addNewUser, findUserbyEmail } from "../../services/apiService";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();
  const { email } = user;

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

  const [facility, setFacility] = useState(null);
  const [staff, setStaff] = useState(null);
  const [services, setServices] = useState(null);
  const [comment, setComment] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // createReview(facility, staff, services, comment = "No Comment" )

    setFacility(0);
    setStaff(0);
    setServices(0);
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
