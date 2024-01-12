
import React from 'react'
import Ceopics from './ceo_kyt2lh.jpg'

function Feedbacks() {
  return (
    <div>
       <section class="our-details">
        <div class="container">
            <div class="our-details text-center pt-4">
                <span> ___ &nbsp; <i class="fa-solid fa-envelope-open-text fa-flip fa-xl" style={{color: '#41b965'}}></i> &nbsp; ___ </span>

                <h1><span style={{color:"#66CC66"}}>WHAT PEOPLE SAY</span>&nbsp;
                    <span style={{color:"#FF0000"}} >ABOUT US</span></h1>
            </div>
            <div class="our-details text-center pt-5">              
                <h4>Leading Constructions provides products and services that meet our customers, expectations to bring prosperity and sustainable development for Customers, Employees, Partners, Shareholders, Suppliers</h4>
            </div>
            <div class="our-details text-center pt-5">
                <img src={Ceopics} alt="imgeceo" width="150px"/>
                <h5>Richard Lawson</h5>
                <p>(2014 - till date)</p>
            </div>
        </div>
        <footer class="footiie pt-5">
          <div class="footer-container">
                <div class="container">
                    <div class="footer-1 text-center">
                        <h4>LEADING CONSTRUCTION COMPANY</h4>
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
     </section>
    </div>
  )
}

export default Feedbacks
