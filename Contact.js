
import React from 'react'

function Contact() {
  return (
    <div>
        <section class="getinth">
            <div class="get-in-touch text-center">
                <div class="container">
                    <div class="write-us pt-4">
                            <span> ____ &nbsp; <i class="fa-solid fa-book fa-beat-fade fa-xl" style={{color: '#31b973'}}> &nbsp; </i> ____ </span>
                    </div>
                    <div class="write-us pt-4">
                            <h1 className='pb-5'>GET IN TOUCH</h1>
                            <h5>Company members are committed to living and working according to the company’s values, to build a homogeneous <br/> and strong company’s culture, develop the self-foundation of each individual as an essential focus</h5>
                    </div>
                    <div class="write-us pt-4 text-center">                    
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enquiry" ></textarea>
                            </div>                                     
                            <button class="btn-tartiary py-3 ">Submit </button>
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

export default Contact
