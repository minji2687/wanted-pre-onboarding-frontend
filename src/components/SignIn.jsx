import React, { useEffect, useState } from "react";
import { fetchSignin } from "../api/user/signIn";
import { useNavigate } from "react-router";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const SignIn = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [isDisableButton, setIsDisableButton] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (userInfo.email.includes("@") && userInfo.password.length >= 8) {
      setIsDisableButton(false);
    } else {
      setIsDisableButton(true);
    }
  }, [userInfo.email, userInfo.password]);

  const onSubmit = async () => {
    try {
      const data = await fetchSignin({
        email: userInfo.email,
        password: userInfo.password,
      });
      if (data.status === 200) {
        localStorage.setItem("access_token", data.data.access_token);
        navigate("/todo");
      } else if (data.statusCode === 400 || data.status !== 201) {
        alert("이메일 또는 비밀번호를 다시 확인해주세요");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Wrap>
      <div className="login-form">
        <div className="inner-wrap">
          <h1 className="header-text">Login</h1>
          <input
            data-testid="email-input"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="email-input"
          />
          <input
            data-testid="password-input"
            placeholder="pw"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            className="password-input"
          />
          <button
            data-testid="signup-button"
            onClick={onSubmit}
            disabled={isDisableButton}
            className="submit-button"
          >
            로그인
          </button>
        </div>
      </div>
    </Wrap>
  );
};

export default SignIn;

export const Wrap = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background-color: #f8f5f5;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 500px;
    height: 500px;
    background: #ffffff;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1),
      0px 8px 53px rgba(0, 120, 240, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-wrap {
    width: 50%;
  }
  .header-text {
    margin-top: 0;
    font-weight: 400;
    font-size: 28px;
    line-height: 31px;
    color: #4461f2;
    text-align: center;
    margin-bottom: 60px;
  }
  .email-input,
  .password-input {
    width: 100%;
    height: 35px;
    margin-bottom: 35px;
    border: none;
    border-bottom: 1px solid #919191;
    outline: none;
    font-size: 14px;
  }
  .submit-button {
    width: 101%;
    height: 51.22px;
    background-color: #4461f2;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
    :disabled {
      opacity: 0.6;
    }
  }
`;
