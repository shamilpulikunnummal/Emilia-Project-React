import'./Jewlery&NecklaceCollection.css';
import jewlryNecklaceCollection1 from '../../assets/Jwelry&NecklanceCollectionBanner/jwllery-collection-banner-1.webp';
import jewlryNecklaceCollection2 from '../../assets/Jwelry&NecklanceCollectionBanner/necklace-collection-baner-2.webp';




function JewelryAndNecklaceCollection() {
  return (
   <>
   <div className="container jewlryNecklaceCollection">
  <div className="row">
    <div className="col-12 col-md-6 mb-4">
      <div className="categoryitem">
        <img
          src={jewlryNecklaceCollection1}
          alt="Jewelry"
          className="img-fluid w-100"
          style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '10px' }}
        />
        <div className="categoryContant">
          <h3>Jewelry Collection</h3>
          <p>Shop Now →</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 mb-4">
      <div className="categoryitem">
        <img
          src={jewlryNecklaceCollection2}
          alt="Necklace"
          className="img-fluid w-100"
          style={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '10px' }}
        />
        <div className="categoryContant">
          <h3>Necklace Collection</h3>
          <p>Shop Now →</p>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  );
}

export default JewelryAndNecklaceCollection;