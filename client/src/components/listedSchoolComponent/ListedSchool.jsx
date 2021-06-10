import './ListedSchool.css';

const ListedSchool = ({school}) => {

  const { name, address } = school;

  return (
    <li>
      <div> {name} </div>
      <div> {address} </div>
    </li>
  );
};

export default ListedSchool;