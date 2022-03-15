import React from "react";
import { Heading, ServicesCard } from "../../components/Index";
import "./services.css";
import data from '../../data'

function Services() {

  return (
    <>
      <Heading>Services</Heading>
      <div className="container services-cards" id="services">
        {data.services.map((item, index) => (
          <ServicesCard
            heading={item.title}
            description={item.description}
            icon={item.icon}
            key={index}
            color={item.color}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
