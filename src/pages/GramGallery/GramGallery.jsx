import './GramGallery.css' 
import GramGallery1 from '@/assets/GramGallery/bn-grow-1.webp';
import GramGallery2 from '@/assets/GramGallery/bn-grow-2.webp';
import GramGallery3 from '@/assets/GramGallery/bn-grow-3.webp';
import GramGallery4 from '@/assets/GramGallery/bn-grow-4.webp';
import GramGallery5 from '@/assets/GramGallery/bn-grow-5.webp';








// import '../../pages/HomePage/HomePageCarousel.css'


function GramGallery() {
  return (
    <>
      <div className="gramgallery">
        <div className="artistry-and-inspiration">
          <p className="side-head-sub-tittle">GRAM GALLERY</p>
          <h1 >Artistry And Inspiration</h1>
          <p className='text-small'>
            Discover a selection that blends the latest trends with timeless styles.<br />
            Our collection offers versatile pieces that elevate your wardrobe.
          </p>
          <button className='round-button-black'>View All Gallery</button>
        </div>

        <div className=" gallery-images">
          <img src={GramGallery1} alt="Gallery" className="img1" />
          <img src={GramGallery2} alt="Gallery" className="img2" />
          <img src={GramGallery3} alt="Gallery" className="img3" />
          <img src={GramGallery4} alt="Gallery" className="img4" />
          <img src={GramGallery5} alt="Gallery" className="img5" />
        </div>
      </div>
    </>
  );
}


export default GramGallery;