import React from "react";
import "./header.css";
import { Card } from "./Card";
import { User } from "./User";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";


export const Header = () => {
  
  return (
    <div>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="search..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </div>
  );
};
