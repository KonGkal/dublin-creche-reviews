import "./ListedSchool.css";

const ListedSchool = ({ school }) => {
  const { name, address } = school;

  return (
    <li className="listed-school shadow-and-border">
      <div>
        <b>School Name:</b> {name}{" "}
      </div>
      <div>
        <b>Address:</b> {address}{" "}
      </div>
    </li>
  );
};

export default ListedSchool;
