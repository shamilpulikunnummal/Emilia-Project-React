import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ShoppingBanner.css';
import shopBannerImg1 from '../../assets/Shop/ShopingNavCarosel/shop-jewlery.webp';
import shopBannerImg2 from '../../assets/Shop/ShopingNavCarosel/shop-Bracelets.webp';
import shopBannerImg3 from '../../assets/Shop/ShopingNavCarosel/shop-Earrings.webp';
import shopBannerImg4 from '../../assets/Shop/ShopingNavCarosel/shop-Rings.webp';
import shopBannerImg5 from '../../assets/Shop/ShopingNavCarosel/shop-Brooches.webp';








function ShoppingBanner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ]
  };

  return (
    <>
        <div style={{ marginTop: 0, paddingTop: 0 }}></div>
     <div className="ShoppingBanner">
        <h2>SHOP</h2>
      

      <div className="carousel-container ">
        <Slider {...settings}>
          <div className="corosel-circle">
            <div className="circle-img-wrap ">
              <img src={shopBannerImg1} alt="Jewelry" />
              <p>Jewelry</p>
              <span>19 Products</span>
            </div>
          </div>
          <div className="corosel-circle">
            <div className="circle-img-wrap">
              <img src={shopBannerImg2} alt="Bracelets" />
              <p>Bracelets</p>
              <span>5 Products</span>
            </div>
          </div>
          <div className="corosel-circle">
            <div className="circle-img-wrap">
              <img src={shopBannerImg3} alt="Earrings" />
              <p>Earrings</p>
              <span>7 Products</span>
            </div>
          </div>
          <div className="corosel-circle">
            <div className="circle-img-wrap">
              <img src={shopBannerImg4} alt="Rings" />
              <p>Rings</p>
              <span>6 Products</span>
            </div>
          </div>
          <div className="corosel-circle">
            <div className="circle-img-wrap">
              <img src={shopBannerImg5} alt="Brooches" />
              <p>Brooches</p>
              <span>6 Products</span>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    </>
  );
}

export default ShoppingBanner;
