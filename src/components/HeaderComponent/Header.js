import './Header.css';
import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Auth from '../AuthComponent/Auth'
function Header() {
  const[HeaderContent,setHeaderContent]=useState();
  
  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="admin")
    {
      setHeaderContent(<>
        {/* header section strats */}
        
        <header class="header_section">
          <div class="header_top">
            <div class="container-fluid ">
              <div class="contact_nav">
                <a >
                  
                  <span>
                   <h1> Welcome Admin..</h1>
                  </span>
                </a>
                <a >
                  
                  <span>
                    <b>{localStorage.getItem("email")}</b>
                  </span>
                </a>
                
              </div>
            </div>
          </div>
          
          </header>
        
          </>
      
  )
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem('role')=="user"){
      //setHeaderContent(<><h1>User Header</h1></>)
      setHeaderContent(<>
        {/* header section strats */}
    
        <header class="header_section">
          <div class="header_top">
            <div class="container-fluid ">
              <div class="contact_nav">
                <a >
                  
                  <span>
                   <h1> Welcome User..</h1>
                  </span>
                </a>
                <a >
                  
                  <span>
                    <b>{localStorage.getItem("email")}</b>
                  </span>
                </a>
                
              </div>
            </div>
          </div>
          </header>
          
          </>
      
  )}
    else{
      setHeaderContent(<>
      {/* header section strats */}
      
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid ">
            <div class="contact_nav">
              <a >
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +01 123455678990
                </span>
              </a>
              <a >
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email : demo@gmail.com
                </span>
              </a>
              <a >
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  12 Street,Indore,India
                </span>
              </a>
            </div>
          </div>
        </div>
        </header>
        
        </>
      )
    }
  });
  return (
    
    <>
    <Auth/>
    {HeaderContent}
    {/*<header class="header_section">
    <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" >
              <span>
              SHIPPING STORE
              </span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" ><Link to="/">Home <span class="sr-only">(current)</span></Link></a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" ><Link to="/about"> About</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Register</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i><Link to="/login"> Login</Link></a>
                </li>
                <form class="form-inline">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  */}
    
    </>
     
  );

  }
export default Header;
