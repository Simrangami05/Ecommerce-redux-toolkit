import React from "react";
import { order } from "../../assets/data/data";
import "./Slider.css";

export const Order = () => {
  return (
    <>
      <section className="order">
        <div className="container grid boxItems">
          {order.map((item) => (
            <div className="box flexCenter" key={item.id}>
              <div className="num">
                <h1>{item.id}</h1>
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <h3>{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
