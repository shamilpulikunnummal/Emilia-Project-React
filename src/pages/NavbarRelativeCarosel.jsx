import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/NavbarRelativeCarosel.css'
import { Outlet } from 'react-router-dom';

function NavbarRelativeCarosel() {
 

  return (
       <div className="carousel-wrapper container">
      <ul className="scrolling-text">
        <li><span >●</span>  Free Shipping Available</li>
        <li><span>●</span> Join Our Community</li>
        <li><span>●</span> Explore New Arrivals</li>
        <li><span>●</span> Shop Now Today</li>
        <li><span>●</span> Discover Your Style</li>
        <li><span>●</span> Limited Time Offer</li>

        {/* Repeat for infinite effect */}
        <li> <span>●</span> Free Shipping Available</li>
        <li><span>●</span>Join Our Community</li>
        <li><span>●</span> Explore New Arrivals</li>
        <li><span>●</span> Shop Now Today</li>
        <li><span>●</span> Discover Your Style</li>
        <li><span>●</span> Limited Time Offer</li>
      </ul>
      
          <Outlet />
    </div>
  );
}

export default NavbarRelativeCarosel;
