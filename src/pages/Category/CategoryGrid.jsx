import './CategoryGrid.css';
import slider1 from '../../assets/CategoryGrid/category-1.webp';
import slider2 from '../../assets/CategoryGrid/category-2.webp';
import slider3 from '../../assets/CategoryGrid/category-3.webp';
import slider4 from '../../assets/CategoryGrid/category-4.webp';


function CategoryGrid(){
    return(
        <>
  <div class="container category-grid">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div className="categoryitem"> <img src={slider1}alt="slider1" />
        <div className="categoryContant"> 
          <h3>BRACELETE</h3>
          <span>12 Product</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div className="categoryitem"> <img src={slider2}alt="slider2" /> 
      <div className="categoryContant"> 
          <h3>EARRINGS</h3>
          <span>10 Product</span>
        </div>
      </div>     
    </div>
    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div className="categoryitem"> <img src={slider3}alt="slider3" />
      <div className="categoryContant"> 
          <h3>RINGS</h3>
          <span>19 Product</span>
        </div>
      </div>     
    </div>
     <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div className="categoryitem"> <img src={slider4}alt="slider4" />
      <div className="categoryContant"> 
          <h3>NECKLACE</h3>
          <span>26 Product</span>
        </div>
      </div>
    </div>
  </div>
</div>
        
        
        </>
    )
}

export default CategoryGrid;