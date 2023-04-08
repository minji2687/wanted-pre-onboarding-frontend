import http from ".."

export const fetchSignin = async(userInfo)=>{
  console.log(userInfo)
  try{
    const data = await http.post('/auth/signin',userInfo)
    return data  
  }catch(error){
    console.error(error)
  }
}

