
import './LookBook.css'; 

function LookBook() {
  return (
    <>
  <div className="lookbook container my-5 ">
  <div className="row align-items-center">
    <div className="col-12 col-lg-6">
      <div className="text-content">
        <p className="side-head-sub-tittle ">LOOKBOOK</p>
        <h2 className="">Latest Trends & Timeless Styles</h2>
        <p className="text-small">
          Discover a selection that blends the latest trends with timeless styles.
          Our collection offers versatile pieces that elevate your wardrobe and
          ensure you look chic for any occasion. Embrace fashion that transcends seasons.
        </p>
      </div>
    </div>
    <div className="col-12 col-lg-6">
      <img
        src="https://emillia.risingbamboo.com/wp-content/uploads/2025/03/lookbook-5-scaled.jpg"
        className="img-fluid rounded"
        alt="Lookbook"
      />
    </div>
  </div>
</div>

    </>
  );
}

export default LookBook;