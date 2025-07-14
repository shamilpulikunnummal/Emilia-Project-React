import './BrandCarosel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import brand1 from '@/assets/BrandsCarousel/brand-1.webp';
import brand2 from '@/assets/BrandsCarousel/brand-2.webp';
import brand3 from '@/assets/BrandsCarousel/brand-3.png';
import brand4 from '@/assets/BrandsCarousel/brand-4.webp';
import brand5 from '@/assets/BrandsCarousel/brand-5.webp';
import brand6 from '@/assets/BrandsCarousel/brand-6.webp';
import brand7 from '@/assets/BrandsCarousel/brand-7.webp';
import brand8 from '@/assets/BrandsCarousel/brand-8.webp';





function BrandCarosel() {
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,        // ✅
  dots: true,          // ✅ Add comma here
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ]
};

  return (
    <div className="carousel-container" style={{ margin: "50px" }}>
      <Slider {...settings}>
        <div className='brandcaroselimg'><img src={brand1} alt="1" /></div>
        <div className='brandcaroselimg'><img src={brand2}  alt="2" /></div>
        <div className='brandcaroselimg'><img src={brand3} alt="3" /></div>
        <div className='brandcaroselimg'><img src={brand4}  alt="4" /></div>
        <div className='brandcaroselimg'><img src={brand5}  alt="5" /></div>
        <div className='brandcaroselimg'><img src={brand6} alt="6"  /></div>
        <div className='brandcaroselimg'><img src={brand7}alt="7" /></div>
        <div className='brandcaroselimg'><img src={brand8} alt="8" /></div>
         

      </Slider>
    </div>
    );
}
export default BrandCarosel;