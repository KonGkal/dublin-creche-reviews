import { createContext } from "react";
const SchoolsContext = createContext<SchoolsState>(
  {
  schools: [],
  setSchools: () => undefined
  }
);

export default SchoolsContext;
