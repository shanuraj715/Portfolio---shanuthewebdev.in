import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./card.css";
import OutsideClickHandler from "react-outside-click-handler";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Card(prop) {
  const [cardVisibility, setCardVisibility] = useState(0);

  const hideFullScreen = () => {
    const elem = document.getElementById("skill-card-full-dc");
    elem.classList.add("skill-card-full-dc-ra");
    window.a = setTimeout(() => {
      setCardVisibility(0);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(window.a);
    };
  }, []);

  return (
    <> 
      <div
        className={`skill-card ${prop.classes}`}
        onClick={() => setCardVisibility(1)}
        data-aos={prop.aosAnimName || "zoom-in-up"}
        data-aos-offset="300"
      >
        <div>
          <img src={prop.icon} alt={prop.iconTitle} />
        </div>
      </div>
      {cardVisibility ? (
        <div className="skill-card-full">
          <OutsideClickHandler onOutsideClick={hideFullScreen}>
            <div className="skill-card-full-dc" id="skill-card-full-dc">
              <div className="scf-cbb">
                <p>{prop.iconTitle}</p>
                <span onClick={hideFullScreen}>
                  <i className="fas fa-times"></i>
                </span>
              </div>
              <div className="sc-data-container">
                <div>
                  <CircularProgressbar
                    value={prop.rating}
                    maxValue={10}
                    text={prop.rating.toFixed(1)}
                    styles={buildStyles({
                      textColor: "#192a56",
                      pathColor: "#40739e",
                      textSize: "1.3rem",
                    })}
                  />
                </div>
                <div>
                  <span></span>
                </div>
              </div>
              <div className="sc-bg">
                <img src={prop.icon} alt="" />
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      ) : null}
    </>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  iconTitle: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Card;
