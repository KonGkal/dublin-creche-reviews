import { createContext } from "react";
const SelectedSchoolContext = createContext<SelectedSchoolState>({
  selectedSchool: {
    id: -1,
  },
  setSelectedSchool: () => undefined
});

export default SelectedSchoolContext;
