import { instance } from "../instance";

interface User {
  email: string;
  password: string;
}

const loginAPI = (user: User) => {
  return instance.post("/login", user);
};

export { loginAPI };
