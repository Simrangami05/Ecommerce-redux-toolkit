import React, { useState } from "react";
import {IoSettingsOutline} from 'react-icons/io5'
import {BsBagCheck} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {GrHelp} from 'react-icons/gr'
import {BiLogOut} from 'react-icons/bi'

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                alt=""
              />
            </button>

            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <div className="img">
                    <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="" />
                  </div>
                  <div className="text">
                    <h4>Simran Gami</h4>
                    <label htmlFor="">Nepal,Kathmandu</label>
                  </div>
                </div>
                <button className="box">
                  <IoSettingsOutline className="icon"/>
                  <h4>My Account</h4>
                </button>
                <button className="box">
                  <BsBagCheck className="icon"/>
                  <h4>My Order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon"/>
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon"/>
                  <h4>Help</h4>
                </button>
                <button className="box">
                  <BiLogOut className="icon"/>
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};
