import './NewArrivals.css';
import frontImg1 from '../../assets/NewArrivals/new-arriwal 1.jpg';
import hoverImg1 from '../../assets/NewArrivals/new-arrwal-01.jpg';
import frontImg2 from '../../assets/NewArrivals/new-arr-2.jpg';
import hoverImg2 from '../../assets/NewArrivals/new-arriwal-02.jpg';
import frontImg3 from '../../assets/NewArrivals/new-arr-3.jpg';
import hoverImg3 from '../../assets/NewArrivals/new-arr-03.jpg';
import frontImg4 from '../../assets/NewArrivals/new-arr-4.jpg';
import hoverImg4 from '../../assets/NewArrivals/new-arr-04.jpg';
import frontImg5 from '../../assets/NewArrivals/nwe-arr-5.jpg';
import hoverImg5 from '../../assets/NewArrivals/new-arr-05.jpg';


function NewArrivals() {
  
  return (
    <div className="new-arrivals py-5">
      <div className="container">
        <div className="image-grid">

          {[
            { front: frontImg1, hover: hoverImg1, name: 'Pearl Cocktail', rating: 5, price: '$55.00', oldPrice: '$65.00' },
            { front: frontImg2, hover: hoverImg2, name: 'Cameo Pendant', rating: 4, price: '$12.50' },
            { front: frontImg3, hover: hoverImg3, name: 'Crystal Choker', rating: 4, price: '$15.00', class: 'display-none-img-3' },
            { front: frontImg4, hover: hoverImg4, name: 'Bohemian Gemstone', rating: 4, price: '$120.00', class: 'display-none-img-4' },
            { front: frontImg5, hover: hoverImg5, name: 'Crystel Chandelier', rating: 4, price: '$10.00', oldPrice: '$14.00', class: 'none-img-5' },
          ].map((item, index) => (
            <div className={`image-item container ${item.class || ''}`} key={index}>
              <div className="wrapper">
                <div className="img-1 ">
  <img src={item.front} alt={`img-${index}`} />
  <div className="hover-img container">
    <img src={item.hover} alt={`img-${index}-hover`} />

    {/* Vertical action buttons (eye, heart, etc.) go here */}
    <div className="action-icons">
    
      <button className="icon-btn"><i className="fa-solid fa-eye"></i></button>
      <button className="icon-btn"><i className="fa-solid fa-heart"></i></button>
      <button className="icon-btn"><i className="fa-solid fa-arrow-right-arrow-left"></i></button>
    </div>
    <div className="add-to-cart-wrapper mt-3 container-sm ">
  <button className="btn  add-to-cart-btn mb-2">ADD TO CART</button>
</div>

     </div>
   </div>
                <div className="captons-in-jewelery">
                  <span><a href="#" className='text'>JEWELERY</a></span>
                  <div className="jewelery-item"><a href="#">{item.name}</a></div>
                  <div className="jewwlwry-item-raiting d-flex gap-2">
                    <div>
                      {[...Array(item.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                    </div>
                    <div className='rating'>({item.rating}.0)</div>
                  </div>
                  <div className="price d-flex gap-2">
                    <div className="actualprice">{item.price}</div>
                    {item.oldPrice && <div className="oldprice">{item.oldPrice}</div>}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
