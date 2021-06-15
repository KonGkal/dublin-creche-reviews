import "./ListedSchool.css";

const ListedSchool = ({ school }) => {
  const { name } = school;

  return (
    <li className="listed-school shadow-and-border">
      <div>
        <b>School Name:</b> {name}{" "}
      </div>
    </li>
  );
};

export default ListedSchool;
