import './HeaderBottom.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function HeaderBottom() {
  const [HeaderBottom, setHeaderBottom] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "admin") {
      setHeaderBottom(<>
        {/* header section strats */}
        
        <header class="header_section">
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
                      <a class="nav-link" ><Link to="/adminhome">AdminHome <span class="sr-only">(current)</span></Link></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" ><Link to="/manageuser">ManageUser <span class="sr-only">(current)</span></Link></a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Link>Manage Category</Link>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" ><Link to="/addcategory">Add Category</Link></a>
                        <a class="dropdown-item" ><Link to="/addsubcategory">Add Sub Category</Link></a>
                      </div>
                    </li>
                        
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Link> Settings</Link>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" ><Link to="/cpadmin"> Change Password</Link></a>
                        <a class="dropdown-item" ><Link to="/epadmin">Edit Profile</Link></a>
                      </div>
                    </li>
                   
                    <li class="nav-item">
                      <a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i><Link to="/logout"> Logout</Link></a>
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
        
      </>

      )
    }
    else if (localStorage.getItem("token") != undefined && localStorage.getItem('role') == "user") {
      //setHeaderContent(<><h1>User Header</h1></>)
      setHeaderBottom(<>
        <header class="header_section">
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
                      <a class="nav-link" ><Link to="/">UserHome <span class="sr-only">(current)</span></Link></a>
                    </li>
               
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Link>Manage Shipments</Link>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" ><Link to="/addshipment">Add Shipments</Link></a>
                        <a class="dropdown-item" ><Link to="/searchshipment"> Search Shipments</Link></a>
                      </div>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" > <i class="fa fa-user" aria-hidden="true"></i><Link to="/logout"> Logout</Link></a>
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
      </>

      )
    }
    else {
      setHeaderBottom(<>
        
        <header class="header_section">
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
                      <a class="nav-link" ><Link to="/service"> Service</Link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"><Link to="/register">Register</Link></a>
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
        
      </>
      )
    }
  });
  return (

    <>
      {HeaderBottom}
    </>

  );

}
export default HeaderBottom;
