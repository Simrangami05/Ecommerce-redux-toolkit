import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <span>Username or Email adress</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="password" required />
            <button className="button">Login</button>
            <Link to="/register">not a member? - sign up here</Link>
          </form>
        </div>
      </section>
    </>
  );
};
