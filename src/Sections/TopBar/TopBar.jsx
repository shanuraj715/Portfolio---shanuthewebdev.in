import { useState, useEffect, useRef } from "react";
import "./topbar.css";
import shanu from "../../assets/images/shanuthewebdev.jpg";
import data from '../../data'

function TopBar() {
  const [string, setString] = useState("");
  const str = "shanu_the_web_dev";
  let index = useRef(0);
  let length = str.length;
  let direction = useRef("forward");

  useEffect(() => {
    let interval = setInterval(() => {
      if (direction.current === "forward") {
        setString((prevState) => prevState + str[index.current]);
        index.current = index.current + 1;
      } else {
        setString((prevState) => prevState.substring(0, index.current));
        index.current = index.current - 1;
      }
      if (index.current === length) direction.current = "backward";
      if (index.current === -1) {
        direction.current = "forward";
        index.current = 0;
      }
    }, 100);

    return () => {
      setString("");
      clearInterval(interval);
    };
  }, [length]);

  return (
    <div className="top-bg-clr container-fluid">
      <div className="section1 container">
        <div className="section1-over">
          <h1 data-aos="zoom-in-right" data-aos-delay="200">Shanu Raj</h1>
          <h2 data-aos="zoom-in-right" data-aos-delay="300">&nbsp;{string}</h2>
          <p data-aos="zoom-in-right" data-aos-delay="400">{data.topbar.description}</p>
        </div>
        <div className="section1-img-cont">
          <div className="image-cont" data-aos="zoom-in-left">
            <span className="image-top-left-border"></span>
            <img src={shanu} className="section1-img" alt="" />
            <span className="image-bottom-right-border"></span>
          </div>
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
  );
}

export default TopBar;
