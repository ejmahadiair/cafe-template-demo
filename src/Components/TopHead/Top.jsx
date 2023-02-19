import {
  EnvironmentFilled,
  HistoryOutlined,
} from "@ant-design/icons/lib/icons";
import React from "react";
import "./top.scss";
const Top = () => {
  return (
    <>
      <div className="top-head">
        <div className="top-box">
          <div className="left">
            Sign up for our Loyalty Program today and receive 15% OFF your first
            order.
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">Need Help?</a>
              </li>
              <li>
                <a href="" style={{borderBottom:'1px solid white'}}>+8801642167361</a>
              </li>
              <li>
                <a href="" style={{display: "flex", justifyContent:'center', alignItems:'center', gap:'3px'}}>
                  <HistoryOutlined color="#ffffff" />
                  <p>08:00am 10:00pm</p>
                </a>
              </li>
              <li>
                <a href="">
                  <EnvironmentFilled color="#ffffff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
