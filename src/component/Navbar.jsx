
import '../styles/Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { FaBeer } from 'react-icons/fa';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




function Navbar() {
   const { loginWithRedirect,logout,isAuthenticated, } = useAuth0();
   const location = useLocation();
const isShopPage = location.pathname === "/shop";
  return (
    <>
          <nav className={`navbar navbar-expand-lg container ${isShopPage ? 'shop-navbar' : 'default-navbar'}`}>
  <div className="container-fluid">
    {/* Logo */}
    <a className="navbar-brand" href="#">
      <img src="../../src/assets/main-logo.png" className="logo" style={{ width: "6rem", height: "3rem" }} alt="Logo" />
    </a>

    {/* Toggle Button for Offcanvas */}
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Desktop Menu (Visible above 768px) */}
    <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between" id="navbarContent">
      <ul className="navbar-nav gap-5 mx-auto">
        
            <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
         </li>
          
        <li className="nav-item">
    <Link className="nav-link" to="/shop">Shop</Link>
         </li>
       
        <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
      </ul>
      <div className="d-flex gap-4  align-items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-solid fa-cart-shopping"></i>
         { isAuthenticated ? 
        <div className="btn log-out"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <i> <RiLogoutBoxRLine /> </i> </div>
        :
          <div className="btn" onClick={() => loginWithRedirect()}>      
        <i className="fa-regular fa-user "></i>
        </div>  

      }
        

        
      </div>
    </div>
  </div>
</nav>

{/* Offcanvas for Mobile View */}
<div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    {/* Search */}
    <div className="input-group mb-3">
      <span className="input-group-text"><i className="fa fa-search"></i></span>
      <input type="text" className="form-control" placeholder="What are you looking for?" />
    </div>

    {/* Menu List */}
    <ul className="list-unstyled">
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> */}
      <li><a href="#">Home <span className="float-end">&gt;</span></a></li>
      <li><a href="#">Shop <span className="float-end">&gt;</span></a></li>
      <li><a href="#">Product <span className="float-end">&gt;</span></a></li>
      <li><a href="#">Pages <span className="float-end">&gt;</span></a></li>
      <li><a href="#">Blog <span className="float-end">&gt;</span></a></li>
    </ul>

    {/* Contact Info */}
    <div className="mt-4">
      <p><strong>Call Us:</strong> +0123-456-789</p>
      <p><strong>Email:</strong> elilimia@.com</p>
    </div>

    {/* Social Icons */}
    <div className="d-flex gap-3 mt-3">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-pinterest"></i>
      <i className="fab fa-tiktok"></i>
    </div>
  </div>
</div>

<hr className={isShopPage ? "shop-hr" : "default-hr"} />



    
    
    </>
  );
}

export default Navbar;