import './Footer.css'



function Footer(){
    return(
        <>
        <footer className="bg-light py-5">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

      {/* Contact Us */}
      <div className="col">
        <h6 className="fw-semibold">Contact Us</h6>
        <ul className="list-unstyled" style={{ lineHeight: "2" }}>
          <li className="d-flex align-items-start gap-2">
            <i className="fa-solid fa-location-dot mt-1"></i>
            <span className="text-small">1093 Hood Avenue, CA</span>
          </li>
          <li className="d-flex align-items-start gap-2">
            <i className="fa-solid fa-phone mt-1"></i>
            <span className="text-small">+(123) - 456 - 7890</span>
          </li>
          <li className="d-flex align-items-start gap-2">
            <i className="fa-solid fa-envelope mt-1"></i>
            <span className="text-small">Emillia@example.com</span>
          </li>
          <li className="d-flex align-items-start gap-2">
            <i className="fa-solid fa-clock mt-1"></i>
            <span className="text-small">All Day: 9:00AM – 22:00PM</span>
          </li>
        </ul>
      </div>

      {/* My Account */}
      <div className="col">
        <h6 className="fw-semibold">My Account</h6>
        <ul className="list-unstyled" style={{ lineHeight: "2" }}>
          <li className="text-small">Register Account</li>
          <li className="text-small">My Wishlist</li>
          <li className="text-small">Track Your Orders</li>
          <li className="text-small">Checkout</li>
        </ul>
      </div>

      {/* Our Policies */}
      <div className="col">
        <h6 className="fw-semibold">Our Policies</h6>
        <ul className="list-unstyled" style={{ lineHeight: "2" }}>
          <li className="text-small">Shipping & Delivery</li>
          <li className="text-small">Returns Policy</li>
          <li className="text-small">Terms & Conditions</li>
          <li className="text-small">Privacy Policy</li>
        </ul>
      </div>

      {/* Customer Care */}
      <div className="col">
        <h6 className="fw-semibold">Customer Care</h6>
        <ul className="list-unstyled" style={{ lineHeight: "2" }}>
          <li className="text-small">FAQs</li>
          <li className="text-small">Terms of Service</li>
          <li className="text-small">Privacy Policy</li>
          <li className="text-small">Gift Card</li>
        </ul>
      </div>

      {/* Thank You */}
      <div className="col">
        <h6 className="fw-semibold">Thank You For Choosing Us!</h6>
        <p className="text-small">
          We appreciate your support and are dedicated to providing you with the best
          products and service. We look forward to serving you again!
        </p>
      </div>

    </div>
  </div>
</footer>

        
        </>
    )
}

export default Footer;