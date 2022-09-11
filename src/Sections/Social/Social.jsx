import React from "react";
import { Heading } from "../../components/Index";
import "./social.css";
import data from "../../data";

function Social() {
  return (
    <>
      <Heading>Social Network</Heading>
      <div className="container-fluid social-container" id="social">
        <div className="container">
          {data.social.map((item, index) => (
            <a
              data-tip={item.title}
              href={item.url || "#"}
              target="_blank"
              className="social-icon"
              key={index}
              style={{ "--icon-color": item.iconColor }}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-bottom"
              rel="noreferrer"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Social;
