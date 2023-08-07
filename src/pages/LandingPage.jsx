import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import ElementCard from "../components/ElementCard";
import Postcard from "../components/Postcard";
import Footer from "../components/Footer";
import Header from "../components/Header";
const elementlist = [
  {
    icon: <AddCardIcon />,
    heading: "Title Goes Here",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`,
  },
  {
    icon: <AddCardIcon />,
    heading: "Title Goes Here",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`,
  },
];
const postlist = [
  {
    image: "/assets/happy.png",
    heading: "Light, Fast & Powerful",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  },
  {
    image: "/assets/social.png",
    heading: "Light, Fast & Powerful",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  },
  {
    image: "/assets/mention.png",
    heading: "Light, Fast & Powerful",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  },
];
const LandingPage = () => {
  return (
    
    <div className="home-container">
      <Header />
      <img className="background-image" src="/assets/designer_1.png" />
      <section className="list-section" >
        <div className="section-list">
          <h1 className="introduce-heading">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="button-section">
            <button className="ui-button">Purchase UI Kit</button>
            <button className="learn-button"> Learn More</button>
          </div>
        </div>
      </section>
      <section >
        <div >
          <div className="lightimage-container">
            <img
              className="image-container"
              src="/assets/light.png"
              alt=""
            />
          </div>

          <div>
            <div className="light-heading">
              <h1>Light, Fast & Powerful</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div>
              <div className="element-block">
                {elementlist.map((list) => {
                  return (
                    <ElementCard
                      title={list.title}
                      paragraph={list.paragraph}
                      icon={list.icon}
                      heading={list.heading}
                      description={list.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {postlist.map((list) => {
          return (
            <Postcard
              image={list.image}
              heading={list.heading}
              description={list.description}
              button={list.button}
            />
          );
        })}
        <button className="purchase-button"> Purchase Now</button>
      </section>
      <section className="">
        <img className="pricing-image" src="/assets/Pricing.png" alt="" />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
