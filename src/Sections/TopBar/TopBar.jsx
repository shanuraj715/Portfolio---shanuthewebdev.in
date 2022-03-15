import { useState, useEffect } from "react";
import "./topbar.css";
import ShanuRaj from "../../assets/images/shanu.png";
import data from '../../data'

function TopBar() {
  const [string, setString] = useState("");
  const str = "shanu_the_web_dev";
  let index = 0;
  let length = str.length;
  let direction = "forward";

  useEffect(() => {
    let interval = setInterval(() => {
      if (direction === "forward") {
        setString((prevState) => prevState + str[index]);
        index = index + 1;
      } else {
        setString((prevState) => prevState.substring(0, index));
        index = index - 1;
      }
      if (index === length) direction = "backward";
      if (index === -1) {
        direction = "forward";
        index = 0;
      }
    }, 100);

    return () => {
      setString("");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="top-bg-clr container-fluid">
      <div className="section1 container">
        <div className="section1-over">
          <h1>Shanu Raj</h1>
          <h2>&nbsp;{string}</h2>
          <p>{data.topbar.description}</p>
        </div>
        <div className="section1-img-cont">
          <div>
            <img src={ShanuRaj} className="section1-img" alt="" />
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
  );
}

export default TopBar;
