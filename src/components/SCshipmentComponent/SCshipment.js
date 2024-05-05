import './SCshipment.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory } from '../../Api.url';
import {Link,useParams} from 'react-router-dom'
function SCshipment() {
  const params = useParams();
  const [cDetails, setSubCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_apiurlsubcategory + "fetch?catnm="+params.cnm).then((response) => {
      console.log(response.data);
      setSubCategoryDetails(response.data);
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
                  SubCategory <span> List!..{params.cnm}</span>
                </h2>
<br/>
                <div id="category_main">
                  {
                     cDetails.map((row)=>(
                      <Link to={`/shipmentlist/${row.subcatnm}`}>
                      <div className="category_part">
                      
                       <img src={`../Assets/uploads/subcategoryicons/${row.subcaticonnm}`} height="100" width="150"/>
                       <br/>
                       <b>{row.subcatnm}</b> 
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

export default SCshipment;
