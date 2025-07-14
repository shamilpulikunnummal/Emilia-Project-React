import "./HomePageCarousel.css";
import slider1 from "../../assets/HomePageCarousel/home-slider-1.webp";
import slider2 from "../../assets/HomePageCarousel/home-slider-2.webp";
import slider3 from "../../assets/HomePageCarousel/home-slide-3.webp";

function HomePageCarousel() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide container">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-content d-flex flex-column ">
              <span>LET YOUR STYLE SHINE IN NEVER DETAIL</span>
              <h1>
                Embrance Your Indiviidulity <br />
                With Stunning Accessories
              </h1>
              <button className="round-button ">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-content d-flex flex-column ">
              <span>CELEBRATE EVERY MOMENT</span>
              <h1>
                Adon Yourself With Timeless <br />
                Jewlery Creations
              </h1>
              <button className="round-button ">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 " alt="Slide 3" />
            <div className="carousel-content d-flex flex-column ">
              <span>UNLESH YOUR STYLE</span>
              <h1>
                Radiate Confidence With <br />
                Stunning Jewlery
              </h1>
              <button className="round-button ">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HomePageCarousel;
