import './Footer.css';
import { useState ,useEffect } from 'react';
function Footer() {
  const[FooterContent,setFooterContent]=useState();
  useEffect(()=>{
    if(localStorage.getItem("token")==undefined)
    {
      setFooterContent(<><section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <a >
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  12 Street,Indore,India
                </span>
              </a>
              <a >
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a >
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a >
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Links
            </h4>
            <div class="info_links">
              <a class="active" >
                <img src="Assets/images/nav-bullet.png" alt=""/>
                Home
              </a>
              <a class="" >
                <img src="Assets/images/nav-bullet.png" alt=""/>
                About
              </a>
              <a class="" >
                <img src="Assets/images/nav-bullet.png" alt=""/>
                Services
              </a>
              <a class="">
                <img src="Assets/images/nav-bullet.png" alt=""/>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* Upper Footer section */}
</>
)
    }
    else{
       setFooterContent(<></>)
    }
  })
  return (
    <>
    {FooterContent}
    </>
     
  );
}

export default Footer;
