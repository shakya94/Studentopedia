import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import MultiCarousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

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

const EventCarousel = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      // Fetch events data from the API
      axios.get('/events')
        .then(response => {
          setEvents(response.data); // Assuming the response data is an array of events
        })
        .catch(error => {
          console.error("Error fetching events:", error);
        });
    }, []);


  const ImageCarousel = () => {
    const [images, setImages] = useState([]);
  
  useEffect(() => {
      // Fetch images from the API
      axios.get('/images')
        .then(response => {
          setImages(response.data); // Assuming the response data is an array of image URLs
        })
        .catch(error => {
          console.error("Error fetching images:", error);
        });
    }, []);


  return (
    <div className="container text-center">
      <h1>Welcome to Studentopedia</h1>
   <BootstrapCarousel className="my-4">
      {images.map((image, index) => (
        <BootstrapCarousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.imageurl} // Assuming each image object has an `imageurl` property
            alt={`Slide ${index + 1}`}
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>


      <MultiCarousel responsive={responsive} className="mt-5">
        {events.map((event, index) => (
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
                <h5 style={{ margin: 0 }}>{event.title}</h5>
              </div>
              <img
                src={event.imageurl}
                alt={event.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <p>{event.desc}</p>
                <Link to={event.url}>
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
