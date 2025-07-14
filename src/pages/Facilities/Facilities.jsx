
import './Facilities.css';
import Facilities1 from '@/assets/Facilites/free-shipping.png'; 
import Facilities2 from '@/assets/Facilites/secure-payment.png';
import Facilities3 from '@/assets/Facilites/paylater.png';
import Facilities4 from '@/assets/Facilites/cashback.png'; 



function Facilities() {
  return (
     <div className="facilities-container container">
      <div className="facility-item">
        <img src={Facilities1} alt="Facilities" className="facility-icon" />
        <div>
          <h4 className="facility-title">Free Shipping</h4>
          <p className="text-small">
            Enjoy the convenience of free shipping on all <br />
             orders over $50
          </p>
        </div>
      </div>

      <div className="facility-item">
        <img src={Facilities3} alt="Facilities" className="facility-icon" />
        <div>
          <h4 className="facility-title">Buy Now. Pay Later</h4>
          <p className="text-small">
           Shop now, pay later - access your favorite <br />
            jewelry and pay in installments!
          </p>
        </div>
      </div>

      <div className="facility-item">
        <img src={Facilities2} alt="Facilities" className="facility-icon" />
        <div>
          <h4 className="facility-title">Free Shipping</h4>
          <p className="text-small">
            Enjoy the convenience of free shipping on all <br />
             orders over $50
          </p>
        </div>
      </div>

      <div className="facility-item">
        <img src={Facilities4} alt="Facilities" className="facility-icon" />
        <div>
          <h4 className="facility-title">Cashback Reward</h4>
          <p className="text-small">
            Earn cashback rewards on every purchase <br />
             and enjoy savings on future jewelry!
          </p>
        </div>
      </div>

      {/* Repeat for other items... */}
      {/* You can map this from an array for reusability */}
    </div>
  );
}

export default Facilities;
