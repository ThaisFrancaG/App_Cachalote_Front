import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:5000/",
});

interface UserData {
  name?: string;
  email: string;
  password: string;
  checkPassword?: string;
}

function getConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export async function signUp(data: UserData) {
  await baseAPI.post(`/sign-up`, data);
}

export async function signIn(data: UserData) {
  const response = await baseAPI.post(`/sign-in`, data);
  const token = response.data;
  return token;
}
