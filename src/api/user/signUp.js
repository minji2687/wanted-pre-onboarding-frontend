import http from ".."

export const fetchSignUp = async(userInfo)=>{
  console.log(userInfo)
  try{
    const data = await http.post('/auth/signup',userInfo)
    return data  
  }catch(error){
    console.error(error)
  }
}

