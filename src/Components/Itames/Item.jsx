import React from "react";
import QuateRemark from "../QuateRemark/QuateRemark";
import "./item.scss";
import Itembox from "./itembox/Itembox";
import ProductItem from "./productItem/ProductItem";
import ShowBox from "./showbox/ShowBox";
const coffeepot = require("../../media/photos/coffepot.PNG");
const coffepotrm = require("../../media/photos/coffepotrm.png");
const pizzarm = require("../../media/photos/pizzarm.png");
const fishcurrm = require("../../media/photos/fishcurrm.png");
const burgerrm = require("../../media/photos/burgerrm.png");
const drinksrm = require("../../media/photos/drinksrm.png");
const rastu = require("../../media/photos/rastu.jpg");
const menu = require("../../media/photos/menu.PNG");
const freewifirm = require("../../media/photos/freewifirm.png");
const bostarm = require("../../media/photos/bostarm.png");
const logo = require("../../media/photos/logo.PNG");
const Item = () => {
  return (
    <div className="item-container">
      <div className="item-box">
        <Itembox />
        <Itembox />
        <Itembox />
      </div>
      <div className="item-box">
        <ShowBox width={"450px"} />
        <ShowBox />
        <ShowBox />
      </div>
      <div className="coffee-sec">
        <div className="sec1">
          <h1>We re a dedicated gluten free café.</h1>
          <h3>But you d never know if we didn t mention it.</h3>
          <p>
            You see, our creations redefine what gluten free means. Impossibly
            moist layer cakes, decadent desserts, pillowy rolls, tender crumbs
            everything we make is a reflection of our commitment to flavor,
            texture and artistry of the highest caliber. Informed by classical
            French pastry technique and inspired by California s spirit of
            creativity, we bake because life s too short for anyone to skip
            cake.
          </p>
          <button>Read More</button>
        </div>
        <div className="sec2">
          <img src={coffeepot} alt="" />
        </div>
      </div>
      <div>
        <h1 style={{ margin: "60px", textAlign: "center" }}>
          Our Most Popular Coffee
        </h1>
        <div className="item-box">
          <ProductItem img={coffepotrm} blank={false} />
          <ProductItem img={coffepotrm} blank={false} />
          <ProductItem img={coffepotrm} blank={false} />
        </div>
      </div>
      <div>
        <h1 style={{ margin: "60px", textAlign: "center" }}>
          Our Foods for Foodies
        </h1>
        <p style={{ textAlign: "center", width: "40%", margin: "10px auto" }}>
          We collect the best quality of ingredients From market. With the best
          execution we provide our guest fresh & very Delicious Food.
        </p>
        <div className="item-box">
          <ProductItem img={fishcurrm} blank={false} />
          <ProductItem img={pizzarm} blank={false} />
          <ProductItem img={burgerrm} blank={false} />
          <ProductItem img={fishcurrm} blank={false} />
          <ProductItem img={pizzarm} blank={false} />
          <ProductItem img={burgerrm} blank={false} />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
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
            See All
          </button>
        </div>
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>
          Our Category
        </h1>
      </div>
      <div>
        <h1 style={{ margin: "60px" }}>Coffee</h1>
        <div className="item-box">
          <ProductItem img={coffepotrm} blank={true} msg={"Coffee"} />
          <ProductItem img={coffepotrm} blank={true} msg={"Coffee"} />
          <ProductItem img={coffepotrm} blank={true} msg={"Coffee"} />
        </div>
      </div>
      <div>
        <h1 style={{ margin: "60px" }}>Food</h1>
        <div className="item-box">
          <ProductItem img={pizzarm} blank={true} msg={"Food"} />
          <ProductItem img={fishcurrm} blank={true} msg={"Food"} />
          <ProductItem img={burgerrm} blank={true} msg={"Food"} />
        </div>
      </div>
      <div>
        <h1 style={{ margin: "60px" }}>Drinks</h1>
        <div className="item-box">
          <ProductItem img={drinksrm} blank={true} msg={"Drinks"} />
          <ProductItem img={drinksrm} blank={true} msg={"Drinks"} />
          <ProductItem img={drinksrm} blank={true} msg={"Drinks"} />
        </div>
      </div>
      <div className="item-box">
        <div className="ext-box">
          <div className="ext-box-img">
            <img src={rastu} alt="" />
          </div>
          <div>
            <h2 style={{ margin: "20px auto" }}>Rest, Relax & Revive!</h2>
            <p>
              At Vertical people come from all around to rest, relax and revive
              with good coffee, good company, and great food!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px auto",
              }}
            >
              <img
                src={freewifirm}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="ext-box">
          <div className="ext-box-img">
            <img src={rastu} alt="" />
          </div>
          <div>
            <h3 style={{ margin: "20px auto" }}>
              Did Someone Say
              <q /> Coffee
              <q />
            </h3>
            <p>
              We offer some of the best locally roasted coffee using Brazilian
              Santos beans. Enjoy Dark, Blonde, Jamaican, Italian & Decaf
              roasts. Also available are our specialty Lattes, Frappes, Mochas,
              Cappuccinos, Americanos & more …
            </p>
          </div>
        </div>
        {/*  */}
        <div className="ext-box">
          <div
            className="ext-box-img"
            style={{ width: "100%", height: "100%" }}
          >
            <img src={menu} alt="" />
          </div>
          <div
            style={{
              margin: "10px auto",
            }}
          >
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
              Book Your Table
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
          background: "white",
          width: "100%",
          height: "max-content",
        }}
      >
        <QuateRemark />
      </div>

      <div style={{ width: "100%", height: "50vh" }}>
        <div
          style={{
            width: "90%",
            height: "100%",
            margin: "10px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Want to hear coffee news from us?</h1>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <input
              type="email"
              style={{
                margin: "40px 0",
                padding: "10px 15px",
                width: "30%",
                borderRadius: "6px",
                outline: "none",
                border: "none",
              }}
              placeholder="Your Email Address"
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
              Subscribe
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" />
            <p>
              Please read the Coffee Address Personal data processing policy{" "}
              <a href="" style={{ color: "#ac8435" }}>
                here.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="item-box"
        style={{
          width: "100%",
          height: "max-content",
          backgroundColor: "#fff",
        }}
      >
        <div className="item-1" style={{width:"400px"}}>
          <div>
            <img src={logo} alt="" />
            <p>
              We collect the best quality of ingredients From market. With the
              best execution we provide our guest fresh & very Delicious Food.
            </p>
            <div style={{display:"flex", gap:"20px", justifyContent:"center",alignItems:"center"}}>
              <div className="left">
                <h4>Our Location</h4>
                <div>
                  <p>Above It House# 20, Road# 09 Sector# 11, Dhaka 1230</p>
                </div>
                <a href="">Find Us on map</a>
              </div>
              <div className="right">
                <img src={bostarm} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="item-2">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                Company
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Privacy and policy
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="item-2">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                Company
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Privacy and policy
              </a>
            </li>
          </ul>
        </div>
        <div className="item-2">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                Company
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Privacy and policy
              </a>
            </li>
          </ul>
        </div>
        <div className="item-2">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                Company
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Privacy and policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
