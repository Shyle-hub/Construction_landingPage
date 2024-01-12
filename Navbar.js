
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div class="Primary-navb mb-3">
        <div class="container-fluid">
            <div class="bg_dark pt-3">
                <div class="call us">
                    <span><i class="fa-solid fa-house fa-xl"></i></span> &nbsp;                   
                </div>
                <div class="call us">
                    <span><i class="fa-solid fa-phone fa-xl">&nbsp;</i>1-208-222-4203</span>
                </div>
            </div> 
        </div>
    </div>

    <nav class="navbar navbar-expand-lg pt-4">
        <div class="container">
          <a class="navbar-brand " href="#">Leading Constructions </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Details">What makes us different</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Feedbacks">Feedbacks</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Gallaries">Gallaries</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    //second Navbar
    
  )
}

export default Navbar
