import logo from "./logo.svg";
import "./App.css";
import Top from "./Components/TopHead/Top";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import Quation from "./Components/Quation/Quation";
import Item from "./Components/Itames/Item";
import PopUpBox from "./Components/popupbox/PopUpBox";
import { useState } from "react";

function App() {
  const [posShow, setPopShow] = useState(true);
  return (
    <>
      <Top />
      <Nav />
      <Banner />
      <Quation />
      <Item />
      {posShow && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "100px",
          }}
        >
          <PopUpBox setPopShow={setPopShow}/>
        </div>
      )}
    </>
  );
}

export default App;
