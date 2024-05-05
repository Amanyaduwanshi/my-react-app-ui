import './Slider.css';
import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
function Slider() {
  const[SliderContent,setSliderContent]=useState();
  useEffect(()=>{
    if(localStorage.getItem("token")==undefined)
    {
      setSliderContent(<>
      
      <section class="slider_section ">
      <div class="slider_bg_box">
        <img src="Assets/images/slider-bg.jpg" alt=""/>
      </div>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br/>
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div class="btn-box">
                      <a  class="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br/>
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div class="btn-box">
                      <a  class="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br/>
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div class="btn-box">
                      <a  class="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
    
    {/* end slider section */}
      </>
      )
    }
    
    else if(localStorage.getItem("role")=="admin"){
      
      setSliderContent(<>
        
      
      <section class="slider_section ">
      <div class="slider_bg_box">
        <img src="Assets/images/admin-dashboard.jpg" alt=""/>
      </div>
      
    </section>
    
    {/* end slider section */}
      
            </>)
    }
    else{
      setSliderContent(<>
        
      
        <section class="slider_section ">
        <div class="slider_bg_box">
          <img src="Assets/images/welcome-user.png" alt=""/>
        </div>
        
      </section>
      </>)
    }
  });
  
  return (
    <>
    {/* slider section */}
        {/* end slider section */}
    {SliderContent}
    </>
     
  );
}

export default Slider;
