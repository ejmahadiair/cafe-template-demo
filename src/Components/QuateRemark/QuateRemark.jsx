import React from "react";
import "./quateRemark.scss";
const cupart = require("../../media/photos/cupart.PNG");
const stars = require("../../media/photos/star.PNG");
const QuateRemark = () => {
  return (
    <div className="quation-container-remark">
      <div className="remark-box">
        <div className="remark-desc">
          <h1 style={{ margin: "30px 0 30px 110px" }}>what Our Customer Say</h1>
          <p>
            <q />
            I like the coffee but a little expensive to recommend to friends.
            Can buy acceptable equivalent in Waitrose for half the price
            <q />
          </p>
          <p style={{ margin: "0px 0 0px -200px", fontSize: "14px" }}>
            Esther Howard
          </p>
          <img src={stars} alt="" style={{margin:"0px 0 0px 110px"}}/>
          <p style={{ margin: "0px 0 0px -200px", fontSize: "14px" }}>
          Verified Customer
          </p>
        </div>

        <div className="remark-box-img">
          <img src={cupart} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default QuateRemark;
