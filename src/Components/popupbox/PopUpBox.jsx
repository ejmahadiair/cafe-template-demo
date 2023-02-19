import React from "react";
import "./popUpBox.scss";
const logo = require("../../media/photos/logo.PNG");
const get = require("../../media/photos/getnow.PNG");
const crose = require("../../media/photos/corse.PNG");
const PopUpBox = ({setPopShow}) => {
  return (
    <div
      style={{
        width: "470px",
        height: "450px",
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 10px 1px rgba(0,0,0,0.7)",
        position: "relative",
        
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={()=>{setPopShow(false)}}
      >
        <img src={crose} alt="" />
      </div>
      <div className="left">
        <img src={logo} alt="" />
        <p>Sign Up For Emails</p>
        <h2>Get 10%</h2>
        <h1>OFF</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              margin: "40px 0",
              padding: "10px 15px",
              borderRadius: "6px",
              outline: "none",
              border: "none",
            }}
          />
          <button
            style={{
              padding: "7px 12px",
              color: "white",
              cursor: "pointer",
              border: "1px solid #ac8435",
              outline: "none",
              borderRadius: "3px",
              backgroundColor: "#ac8435",
              textAlign: "center",
            }}
          >
            Confirm Your Table
          </button>
        </div>
      </div>
      <div className="right">
        <img src={get} alt="" />
      </div>
    </div>
  );
};

export default PopUpBox;
