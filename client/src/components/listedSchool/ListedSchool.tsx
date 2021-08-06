import "./ListedSchool.css";
import { SchoolInterface } from "../../interfaces/types";

const ListedSchool = ({ school }: { school: SchoolInterface }) => {
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
