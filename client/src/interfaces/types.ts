interface SchoolInterface {
  id: number;
  name: string;
  lat: number;
  lng: number;
  createdAt: string;
  updatedAt: string;
}

interface ReviewInterface {
  id: number;
  facility: number;
  staff: number;
  services: number;
  overall: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  SchoolId: number;
}

interface UserDetailsInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

type SchoolParams = {
  schoolId: string;
};
