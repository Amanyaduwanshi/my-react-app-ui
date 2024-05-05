import './Shipmentlist.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory,_apiurlshipment } from '../../Api.url';
import {Link,useParams} from 'react-router-dom'
function Shipmentlist() {
  const params = useParams();
  const [slist, setShipmentList] = useState([]);
 // const [timeleft,setTimeLeft]=useState(calculateTimeleft())
  //24 hour after remve items
  let closeshipment=slist.filter((row)=>{
   return (24*60*60*1000>Date.now()-row.info)
   /* let deadline = new Date("Feb 22, 2024 15:37:25").getTime();
    let now = new Date().getTime();
    let diffrenece=deadline-now;
    let timeleft={};
    const calculateTimeleft=()=>{

    }
    if(diffrenece>0){
       timeleft={
        hours:Math.floor(diffrenece/(1000*60*60)),
        minutes:Math.floor((diffrenece/1000/60)%60),
        seconds:Math.floor((diffrenece/1000)%60),
      }
      }
      return timeleft;

      
     setTimeout(()=>{
      setTimeLeft( calculateTimeleft());
     },1000);*/

  })

  useEffect(() => {
    axios.get(_apiurlshipment + "fetch?subcatnm="+params.scnm).then((response) => {
    
      console.log(response.data);
      setShipmentList(response.data);
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
                  Shipment <span> List!..---{params.scnm}</span>
                </h2>
<br/>
                <div id="category_main">
                  {
                     closeshipment.map((row)=>(
                      <>
                      
                      <table border="3" height="175px" width="500px" >
                        <tr>
                          <td width="35%" align ='center' rowspan="3">
                      <img src={`../Assets/uploads/shipmenticons/${row.siconnm}`} height="100" width="150"/>
                      
                      </td> 
                       <td><b>Title:{row.title}</b></td> 
                       </tr>
                       <tr>
                        <td><b>Description:{row.description}</b></td>
                       </tr>
                       <tr>
                        <td><b>BasePrice:{row.baseprice}</b></td>
                        </tr>
                      <center>
                        
                        
                      <a class="nav-link" ><Link to={`../bidproduct/${row.siconnm}`}><b>BID SHIPMENT</b></Link></a>
                    
                      </center>    
                       
                       </table>
                      <span> Time Remaining:{row.info}</span>

                       <br/><br/>
                       </>
                    
                      
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

export default Shipmentlist;
