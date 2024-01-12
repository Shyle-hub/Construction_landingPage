
import React from 'react'
import watermark from './watermark.jpeg'
import image2 from './built-robotics-1568929373.png'
import Depositphotos from './CM20210521-49b57-c1181.jpeg'

function Home() {
  return (
    <div className=''>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={watermark} alt="image1" width="100%"/>
            <div class="carousel-caption d-none d-md-block">
              <button class="btn-tartiary">BUILDER WHO ARE SPECIALISES</button>
              <p>Energy Efficients and eco-friendly homes for domestic market.</p>
              <button class="btn-tartiary"> LEARN MORE </button>
            </div>
          </div>
          <div class="carousel-item active">
            <img src={image2} alt="image2" width="100%"/>
            <div class="carousel-caption d-none d-md-block">
              <button class="btn-tartiary">Leading in buildings</button> 
              <p>Giving the best is our professionalism at work</p>
              <button class="btn-success"> LEARN MORE </button>
            </div>
          </div>
          <div class="carousel-item active">
            <img src={Depositphotos} alt="image3" width="100%"/>
            <div class="carousel-caption d-none d-md-block">
              <button class="btn-lg btn-success">“We shape our buildings; thereafter, they shape us.”</button>
              <p>“Building is about getting around the obstacles that are presented to you.”</p>
              <button class="btn-success"> LEARN MORE</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
     <footer class="footiie pt-5">
          <div class="footer-container">
                <div class="container">
                    <div class="footer-1 text-center">
                        <h5>LEADING CONSTRUCTION COMPANY</h5>
                        <p>BEST QUALITY BUILDERS</p>
                    </div>                
                </div>

                <div class="final-footer ">
                    <div class="f-final1">
                        <p>Copyright Craftman 2015 All Rights Reserved</p>
                    </div>
                    <div class="f-final1">
                        <p>terms & Conditions  |  Privacy policy</p>
                    </div>    
                </div>
                <div className='footer_2'>
                    <h6>Follow Us <br/> On Social Medias</h6>
                    <span><i class="fa-brands fa-twitter fa-xl" style={{color: '#5587dd'}}></i></span>
                    <span><i class="fa-brands fa-instagram fa-xl" style={{color: '#a73939'}}></i></span>
                    <span><i class="fa-brands fa-facebook fa-xl" style={{color: 'blue'}}></i></span>
                    <span><i class="fa-brands fa-google-plus fa-xl" style={{color: '#36b05a'}}></i></span>
                    <span><i class="fa-brands fa-youtube fafoot-xl" style={{color: '#e40707'}}></i></span>
                 </div>
            </div>
       </footer>       
    </div>
    
  )
}

export default Home
