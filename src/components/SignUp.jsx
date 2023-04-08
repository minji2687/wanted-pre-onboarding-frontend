import React, { useState,useEffect } from 'react'
import { fetchSignUp } from '../api/user/signUp';
import { useNavigate } from "react-router";
import { Wrap } from './SignIn';


const SignUp = () => {
  const navigate = useNavigate()
  const [signUpInfo,setSignUpInfo] = useState({
    email:'',
    password:''
  })

  const [isDisableButton,setIsDisableButton] = useState(true)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpInfo((prev)=>({...prev,[name]:value}))
  }

  useEffect(()=>{
    if(signUpInfo.email.includes('@') && signUpInfo.password.length > 8){
      setIsDisableButton(false)
    }else{
      setIsDisableButton(true)
    }
  },[signUpInfo.email,signUpInfo.password])

  const onSubmit = async() => {
    try{
      const data = await fetchSignUp({email:signUpInfo.email,password:signUpInfo.password})
      if(data.status === 201){
        navigate('/signin')
      }
    }catch(e){
      console.error(e);
    }
  }

  return (
    <Wrap>
        <div className="login-form">
          <div className="inner-wrap">
            <h1 className="header-text">SignUp</h1>
            <input data-testid="email-input" name="email" value={signUpInfo.email} onChange={handleChange} className="email-input"/>
            <input data-testid="password-input" name="password" value={signUpInfo.password} onChange={handleChange} className="password-input"/>
            <button data-testid="signup-button" disabled={isDisableButton} onClick={onSubmit} className="submit-button">회원가입</button>
        </div>
      </div>
    </Wrap>
  )
}

export default SignUp