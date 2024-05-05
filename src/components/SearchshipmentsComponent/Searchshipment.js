import './Searchshipment.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory } from '../../Api.url';
import {Link} from 'react-router-dom'
function Searchshipment() {
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiurlcategory + "fetch").then((response) => {
      console.log(response.data);
      setCategoryDetails(response.data);
    }).catch((error) => {
      console.log(error);
    })
  })
  return (
    <>
      {/* about section */}

      <section class="service_section layout_padding">
        <div class="service_container">
          <div class="container ">
            
              <div class="heading_container">
                <h2>
                  Category <span> List!..</span>
                </h2>
<br/>
                <div id="category_main">
                  {
                     cDetails.map((row)=>(
                      <Link to={`/scshipment/${row.catnm}`}>
                      <div className="category_part">
                      
                       <img src={`Assets/uploads/categoryicons/${row.caticonnm}`} height="100" width="150"/>
                       <br/>
                       <b>{row.catnm}</b> 
                      </div>
                      </Link>
                     ))
                  }
                 
                 


                </div>


              </div>
              <div class="col-md-6 ">
                <div class="box ">
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* end about section */}


    </>

  );
}

export default Searchshipment;
