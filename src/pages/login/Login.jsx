import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";

export const Login = () => {
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
          <form>
            <span>Username or Email adress</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="text" required />
            <button className="button">Login</button>
            <Link to="/register">new member? - Signup here</Link>
          </form>
        </div>
      </section>
    </>
  );
};
