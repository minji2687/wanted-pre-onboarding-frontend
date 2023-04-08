import axios from "axios";

const http = axios.create({
  baseURL:'https://www.pre-onboarding-selection-task.shop/'
})

http.interceptors.request.use(function(config){
  const accessToken = localStorage.getItem('access_token') 
  if(accessToken){
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
},function(error){

  return Promise.reject(error)
})


http.interceptors.response.use(function (response) {
  return response;

  }, function (error) {

  return Promise.reject(error);
});

export default http