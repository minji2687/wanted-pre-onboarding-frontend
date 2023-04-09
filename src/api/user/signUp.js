import http from "..";

export const fetchSignUp = async (userInfo) => {
  try {
    const data = await http.post("/auth/signup", userInfo);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
