
import React from 'react'
import Deposit from "./Depositphotos_89120612_s-2019.jpeg"


function About() {
  return (
    <div>
        <section class="about-section">
        <div class="about-us text-center pt-5">
            <div class="container">
                <div class="about-text">
                    <h1>WHO ARE WE ?</h1>
                </div>
                <div class="about-text mt-4">
                    <p>If you want a building that has cost saving, fast erection, perfect quality control, high durability, pre-engineered buildings (PEBs) are the best choice. <br/>As the latest trend in building construction, PEB’s increasingly confirmed their outstanding advantages in industrial and commercial projects such as factory, <br/>warehouse, workshop, cold storage, showroom, office, supermarket, school, stadium, logistics center, shopping mall, steel mill, etc…</p>
                </div>
                <div className='about_img'>
                    <img src={Deposit} alt='Deposit_img' width={"100%"} height={"100%"}></img>
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

export default About
