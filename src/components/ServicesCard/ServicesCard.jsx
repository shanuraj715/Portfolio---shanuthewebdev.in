import React from "react";
import './servicescard.css'

function ServicesCard(props) {

    const limitCharcaters = text => {
        let maxLength = 200;
        if(text.length <= maxLength) return text;
        return text.substring(0, maxLength - 3) + '...'
    }

  return (<>
    <div className="services-card" style={{ "--color": props.color }} data-aos="fade-up"
     data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
      <h3>{props.heading}</h3>
      <p>{limitCharcaters(props.description)}</p>
      <div>
        <img src={props.icon} alt="" />
      </div>
    </div>
    </>
  );
}

export default ServicesCard;

