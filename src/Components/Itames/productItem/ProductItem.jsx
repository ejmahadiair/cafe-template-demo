import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./productItem.scss";
const stars = require("../../../media/photos/star.PNG");

const ProductItem = ({ blank, img, msg }) => {
  return (
    <>
      {!blank ? (
        <div className="item-box-container-product">
          <div className="child">
            <div className="price-div">
              <p
                className="price-btn"
                style={{
                  padding: "7px 12px",
                  color: "white",
                  cursor: "pointer",
                  border: "1px solid #ac8435",
                  outline: "none",
                  borderRadius: "3px",
                  backgroundColor: "#ac8435",
                }}
              >
                $ 50
              </p>
              <img src={stars} alt="" />
            </div>
            <div className="chilt-item">
              <img src={img} alt="" />
            </div>
          </div>

          <h1>Iced Latte Vertical</h1>
          <p>Espresso, Milk, Ice and Choice of Flavor(s) 20oz</p>
          <div className="bottom-part">
            <p>10% Off for new Customer</p>
            <button>
              <ShoppingCartOutlined />
            </button>
          </div>
        </div>
      ) : (
        <div className="item-box-container-product">
          <div className="chilt-item-blank">
            <img src={img} alt="" />
          </div>
          <p style={{margin:"100px auto"}}>{`${msg}`}</p>
        </div>
      )}
    </>
  );
};

export default ProductItem;
