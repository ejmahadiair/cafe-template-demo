import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import "./nav.scss";
const logo = require("../../media/photos/logo.PNG");
const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-box">
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Coffee & Drinks</a>
              </li>
              <li>
                <a href="">Food Menu</a>
              </li>
              <li>
                <a href="">Reservation</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">
                  <SearchOutlined />
                </a>
              </li>
              <li>
                <a
                  href=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <p>$ 00.0 / 0</p>
                  <ShoppingCartOutlined />
                </a>
              </li>
              <li>
                <a href="">
                  <UserOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
