import React from 'react';
import './SchoolList.css';
import ListedSchool from '../listedSchoolComponent/ListedSchool'


const SchoolList = ({schools}) => {

  const schoolList = schools.map( school => <ListedSchool key={school.id} school={school} />)

  return (
    <div>
      <ul>
        {schoolList}
      </ul>
    </div>
  );
};

export default SchoolList;