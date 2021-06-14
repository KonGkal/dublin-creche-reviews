import "./ListedSchool.css";

const ListedSchool = ({ school }) => {
  const { name, address } = school;

  return (
    <li className="listed-school shadow-and-border">
      <div>School Name: {name} </div>
      <div>Address: {address} </div>
    </li>
  );
};

export default ListedSchool;
