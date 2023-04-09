import http from "..";

export const fetchSignin = async (userInfo) => {
  try {
    const data = await http.post("/auth/signin", userInfo);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
