
import '../CustomersReviews/CustomerReview.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomerReview1 from '@/assets/CustomerReview/reviews-1.webp';
import CustomerReview2 from '@/assets/CustomerReview/reviews-2.webp';
import CustomerReview3 from '@/assets/CustomerReview/reviews-3.webp';
import CustomerReview4 from '@/assets/CustomerReview/reviews-4.webp';
import CustomerReview5 from '@/assets/CustomerReview/reviews-5.webp';


function CustomersReviews() {

  const settings = {
    dots: true,
    infinite: true,
    // speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }



  return (
    <>
      <div className="side-head container ">
        <div className='side-head-sub-tittle'>TESTIMONIALS</div>
        <h2 className="side-head-title">Our Customers Reviews</h2>
      </div>

      <Slider {...settings} className='container mt-5 mb-5'>


        <div class="card" style={{ width: '22rem' }}>
          <div class="card-body">
            <span className='cart-sub-head'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>

            <p class="card-text mt-4 mb-4" >I absolutely love my new bracelet! The quality is exceptional, and it adds the perfect touch to any outfit. It’s versatile enough for both casual and formal occasions.</p>
            <div><img src="../../assets/CustomerReview/reviews-1.webp" alt="" /></div>
            <div className="curcle-contant  d-flex ">
              <div className="curcle">
                <img src={CustomerReview1} alt="" />
              </div>
              <div className="curcle-img-name d-flex ">Virigna T Villams</div>
              <div className='curcle-img-name-place'>From Louisiana</div>
            </div>


          </div>
        </div>


        <div class="card" style={{ width: '22rem' }}>
          <div class="card-body">
            <span className='cart-sub-head'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i></span>
            <p class="card-text mt-4 mb-4">Absolutely love this bracelet! The quality is amazing, and it adds a perfect touch of style to both casual and formal looks. Super versatile and elegant!</p>
            <div className="curcle-contant  d-flex ">
              <div className="curcle">
                <img src={CustomerReview2} alt="" />
              </div>
              <div className="curcle-img-name d-flex ">Kathy R Hampton</div>
              <div className='curcle-img-name-place'>From Califormina</div>
            </div>

          </div>
        </div>


        <div class="card" style={{ width: '22rem' }}>
          <div class="card-body">
            <span className='cart-sub-head'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <p class="card-text mt-4 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.</p>
            <div className="curcle-contant  d-flex ">
              <div className="curcle">
                <img src={CustomerReview3} alt="" />
              </div>
              <div className="curcle-img-name d-flex ">Kandis M Melian</div>
              <div className='curcle-img-name-place'>From London</div>
            </div>

          </div>
        </div>

        <div class="card" style={{ width: '22rem' }}>
          <div class="card-body">
            <span className='cart-sub-head'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <p class="card-text mt-4 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.</p>
            <div className="curcle-contant  d-flex ">
              <div className="curcle">
                <img src={CustomerReview4} alt="" />
              </div>
              <div className="curcle-img-name d-flex ">Kathirna</div>
              <div className='curcle-img-name-place'>From Florida</div>
            </div>

          </div>
        </div>

        <div class="card" style={{ width: '22rem' }}>
          <div class="card-body">
            <span className='cart-sub-head'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <p class="card-text mt-4 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.</p>
            <div className="curcle-contant  d-flex ">
              <div className="curcle">
                <img src={CustomerReview5} alt="" />
              </div>
              <div className="curcle-img-name d-flex ">Rubee Gorge</div>
              <div className='curcle-img-name-place'>From Austalia</div>
            </div>

          </div>
        </div>





      </Slider>

    </>
  );
}

export default CustomersReviews;