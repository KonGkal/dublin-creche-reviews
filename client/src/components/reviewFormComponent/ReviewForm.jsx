import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // createEvent(title, formatedDate, venue )

    setTitle("");
    setDate("");
    setVenue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <h1 className="form-title">Create a new event</h1>

          <h5>TITLE</h5>

          <input
            value={title}
            name="title"
            placeholder="Insert a title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />

          <h5>DATE</h5>

          <input
            value={date}
            name="date"
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />

          <h5>VENUE</h5>

          <input
            value={venue}
            name="venue"
            placeholder="Insert a venue"
            onChange={(e) => setVenue(e.target.value)}
            type="text"
          />

          <button type="submit" disabled={!title || !venue || !date}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
