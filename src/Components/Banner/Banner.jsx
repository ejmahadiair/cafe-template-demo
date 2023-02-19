import React from "react";
import "./banner.scss";
const coffeecup = require("../../media/photos/coffeecup.png");
const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-box">
          <div className="left">
            <div className="left-box">
            <p>A Best Café House</p>
            <h1 style={{fontSize:"50px", margin:"40px auto"}}>
              Start Your Day With
                 Morning Coffee
            </h1>
            <p style={{color:'#AC8435', fontSize:"16px", fontWeight:"bold", margin:"25px auto"}}>Colombian Andean coffee Ethiopian acidic coffee</p>
            <p>
            We love the idea of indulging in your health, and every
            item on our menu is full of lush, organic ingredients, bright
            flavor and beautiful color.
            </p>

            <div className="button">
                <button className="active">Get Yours Now</button>
                <button>Reservation</button>
            </div>
            </div>
            
          </div>
          <div className="right">
            <img src={coffeecup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
