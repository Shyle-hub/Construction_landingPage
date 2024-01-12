
import React from 'react'
import Builtrobotics from './built-robotics-1568929373.png'
import Depositphotos from './Depositphotos_89120612_s-2019.jpeg'
import AdobeStock from './AdobeStock_88620839.jpeg'
import Images from './images.jpeg'
import construction from './construction-tech1200x630.jpeg'
import beb1 from './beb1dbd9312e45ec8621e1113a31c573.jpeg'
import CM202 from './CM20210521-49b57-c1181.jpeg'

function Gallaries() {
  return (
    <div>
       <section class="gal-sec">
        <div class="gallary-sec pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <img src={Builtrobotics}alt="builtimg1" width="100%"/>
                    </div>
                    <div class="col-12 col-md-6">
                        <img src={Depositphotos}alt="builtimg2" width="100%"/>
                    </div>
                    <div class="col-12 col-md-3">
                        <img src={AdobeStock} alt="builtimg" width="100%"/>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-12 col-md-3">
                        <img src={Images} alt="builtimg00" width="100%"/>
                    </div>
                    <div class="col-12 col-md-3">
                        <img src={construction}alt="construction-tech1200x630" width="100%"/>
                    </div>
                    <div class="col-12 col-md-3">
                        <img src={beb1} alt="builtimg3" width="100%"/>
                    </div>
                    <div class="col-12 col-md-3">
                        <img src={CM202} alt="CM20210521-49b57-c1181" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
     </section>
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

export default Gallaries
