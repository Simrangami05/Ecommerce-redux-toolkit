import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data";
import { CartItems } from "./CartItems";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCentre">2</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {product.slice(0, 2).map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
        <div className="checkOut">
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor="">$ 240</label>
          </button>
        </div>
      </div>
    </>
  );
};
