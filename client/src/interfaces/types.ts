export interface SchoolInterface {
  id: number;
  name: string;
  lat: number;
  lng: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewInterface {
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

export interface UserDetailsInterface {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type SchoolParams = {
  schoolId: string;
};
