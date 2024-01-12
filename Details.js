
import React from 'react'
import electricity from "./electricity-icon-png-25.png"
import Health from "./Health benefits icon.png"
import Stable from "./Stable Electricity.jpeg"
import Value from "./Add Values.jpeg"
import Emission from "./emission.png"
import background from "./watermark.jpeg"

function Details() {
  return (
    <div style={{backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
    }}>
        <div className='container'>
               <div className='topsec pt-5 pb-4 text-center'>
                    <span> ___ &nbsp; <i class="fa-solid fa-square-check fa-2xl" style={{color: "#1ed263"}} ></i>&nbsp;&nbsp;  ___</span> 
               </div>                              
               <div class="who-we-are text-center pt-3">
                    <h1><span style={{color:"#66CC66"}}>WHAT MAKES</span>&nbsp;
                    <span style={{color:"#FF0000"}} >US DIFFERENT</span></h1>
                    <h6 className='pt-3'>Problem-solving - Challenges can arise at any point during a construction project, so being able to address them quickly and effectively is an excellent skill to have as a building engineer.<br/> One way you can exhibit this skill is by understanding the common challenges projects encounter and offering solutions for those challenges when they arise. <br/>You can also consider technical challenges and how you can solve each one in a variety of ways that still align with regulations in your area</h6>
                </div>
                <div className='who-we-are-row'>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h2>Flexibility</h2>
                            <h6>Flexibility is an important skill for building engineers because every construction project is different and might need unique solutions to challenges. <br/> This can mean being able to adapt to material changes, different construction and design teams, <br/> new requirements for the project and being able to communicate in a variety of ways with your clients. <br/> For example, if you're comfortable using phones, email and meetings to speak with clients, then you can approach new clients more easily because they can use communication methods they're comfortable using.</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h2>Industry knowledge</h2>
                            <h6>While every project is different, the industry typically includes standards you can rely on across multiple projects. <br/> Understanding these regulations, methods and techniques helps you build relationships with your clients and other professionals in your field. <br/> Industry knowledge for building engineers can also include understanding technology and using it to enhance your other skills.</h6>
                        </div>
                    </div>
               </div>
               <div class="benefits-icons text-center">
                    <div class="row">
                        <div class="col-12 col-md-2">
                             <img src={electricity} alt="electricity-icon-png-25" width={"70%"}/>
                            <p>Low Energy Bills</p>
                        </div>
                        <div class="col-12 col-md-2">
                             <img src={Health} alt="Healthimg" width={"70%"}/>
                             <p>Health benefits</p>
                        </div>
                         <div class="col-12 col-md-2">
                             <img src={Stable} alt="electricity-icon-png-25" width={"70%" }style={{color: "#1ed263"}}/>
                             <p>Comfortable with increased interbal light</p>
                         </div>
                         <div class="col-12 col-md-2">
                             <img src={Value} alt="image00" width={"70%"}/>
                             <p>Add Values</p>
                         </div>
                         <div class="col-12 col-md-2">
                             <img src={Emission} alt="emission" width={"70%"}/>
                             <p>Reduce CO2 emissions</p>
                         </div>
                    </div>
                </div>   
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
export default Details
