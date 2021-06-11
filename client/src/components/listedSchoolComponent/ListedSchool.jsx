import "./ListedSchool.css";

const ListedSchool = ({ school }) => {
  const { id, name, address } = school;

  return (
    <li>
      <div> {id} </div>
      <div> {name} </div>
      <div> {address} </div>
    </li>
  );
};

export default ListedSchool;
