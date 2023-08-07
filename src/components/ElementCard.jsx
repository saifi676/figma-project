import React from "react";

const ElementCard = ({ icon, heading, description }) => {
  return (
    <div>
      <section className="card-element">
        {icon}
        <h1>{heading}</h1>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default ElementCard;
