import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://cachalote.onrender.com",
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
export async function getUserData(token: string) {
  const config = getConfig(token);
  const userData = await baseAPI.get("/user-info", config);
  return userData.data;
}
interface Preferences {
  nickname: string;
  avatar: string;
  books: boolean;
  mangas: boolean;
  novels: boolean;
  comics: boolean;
  showPublicNotifications: boolean;
  showFriendsNotifications: boolean;
  getPublicNotifications: boolean;
  getFriendsNotifications: boolean;
}
export async function sendPreferences(token: string, preferences: Preferences) {
  const config = getConfig(token);
  await baseAPI.post(`/user-preferences`, preferences, config);
}
