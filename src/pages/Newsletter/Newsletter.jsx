import './Newsletter.css'

function Newssletter(){
    return(
        <>
        
      <div className="Newssletter" style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
        <div class="side-head-sub-tittle">NEWSLETTER</div>
        <h2 class="">Your Monthly Emillia Update!</h2>

      <div class="subscribe-container container-md py-5">
     <input type="email" placeholder="Enter Your Email " />
     <button>Subscribe</button>
      </div>
      </div>
        
        
        </>
    )
}

export default Newssletter;