import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap"; 
import MultiCarousel from "react-multi-carousel"; 
import { Link } from "react-router-dom";
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cards = [
    {
      title: "Learn Together",
      text: "Join our community of learners to achieve your goals faster.",
      link: "/learn",
      img: slide1,
    },
    {
      title: "Interactive Courses",
      text: "Explore a variety of engaging and interactive courses tailored for you.",
      link: "/courses",
      img: slide2,
    },
    {
      title: "Expert Guidance",
      text: "Get assistance from top educators to guide your learning journey.",
      link: "/guidance",
      img: slide3,
    },
  ];

  return (
    <div className="container text-center">
    
      <h1>Welcome to Studentopedia</h1>

      
      <BootstrapCarousel className="my-4">
        {[slide1, slide2, slide3, slide4, slide5].map((image, index) => (
          <BootstrapCarousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                height: "750px",
                objectFit: "cover",
              }}
            />
            <BootstrapCarousel.Caption>
              <h3>
                {
                  ["Discover", "Learn", "Engage", "Collaborate", "Achieve"][
                    index
                  ]
                }
              </h3>
              <p>
                {
                  [
                    "Explore new concepts and ideas.",
                    "Deep dive into courses and lectures.",
                    "Participate in discussions and group activities.",
                    "Work on projects with peers worldwide.",
                    "Reach new milestones in your learning journey.",
                  ][index]
                }
              </p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>

     
      <MultiCarousel responsive={responsive} className="mt-5">
        {cards.map((card, index) => (
          <div key={index} style={{ padding: "0 15px" }}>
            <div
              className="shadow-sm h-100"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "15px",
                }}
              >
                <h5 style={{ margin: 0 }}>{card.title}</h5>
              </div>
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <p>{card.text}</p>
                <Link to={card.link}>
                  <button className="btn btn-primary">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
}

export default Home;
