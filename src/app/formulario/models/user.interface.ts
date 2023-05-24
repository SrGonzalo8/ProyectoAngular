export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  phone?: string;
  birthdate?: string;
  password?: string;
  groupIds?:number[];
}
