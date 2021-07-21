interface School {
  id: number,
  name: string,
  lat: number,
  lng: number,
  createdAt: string,
  updatedAt: string
}

interface Review {
  id: number,
  facility: number,
  staff: number,
  services: number,
  overall: number,
  comment: string,
  createdAt: string,
  updatedAt: string,
  UserId: number,
  SchoolId: number
}
interface SchoolsState {
  schools: School[],
  setSchools: Function 
}

interface ReviewState {
  reviews: Review[],
  setReviews: Function
}

interface SelectedSchool {
  id: number
}

interface SelectedSchoolState {
  selectedSchool: SelectedSchool,
  setSelectedSchool: Function
}