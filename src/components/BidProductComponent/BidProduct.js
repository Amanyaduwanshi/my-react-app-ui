import './BidProduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlbid,_apiurlshipment } from '../../Api.url';
import {Link,useParams} from 'react-router-dom'


function BidProduct() {
  const params = useParams();
  const [consignment, setConsignment] = useState([]);
  const [userbarrier,setBarrierforuser]=useState([])
  const [bidprice, setBidPrice] = useState();
  const [baseprice, setBasePrice] = useState();
  const [lastlowestbid, setLastLowestBid] = useState();
  const [Output, setOutput] = useState([]);
  const [email,setEmail]=useState(localStorage.getItem("email"));
  const [biddinguser, setBiddingUser] = useState([]);
  //shipmentproduct detail fetch
  useEffect(() => {
    axios.get(_apiurlshipment + "fetch?siconnm="+params.siconnm).then((response) => {
     // alert("hello")
    setConsignment(response.data);
    setBarrierforuser(response.data[0].uid)
    setBasePrice(response.data[0].baseprice)
    }).catch((error)=>{
      console.log(error);
    })
    //Bidding user ki list fetch
  axios.get(_apiurlbid + "fetch?siconnm="+params.siconnm).then((response) => {
    //console.log(response.data);
    setBiddingUser(response.data);
    let l=biddinguser.length;
    setLastLowestBid(response.data[l-1].bidprice)
  }).catch((error) => {
    console.log(error);
  })
})
const handleSubmit=(event)=>{
  const bidcheck=parseInt(bidprice)
  if(!bidcheck || bidcheck==0)
  {
    alert("pleaase fill field carefully");
  }
  else if(localStorage.getItem("email")===userbarrier){
    alert("the user who upload the shipment is not authorised to participate in bidding process")
  }
  else if(bidprice>baseprice)
  {
    alert("bidding price must be less than baseprice");
  }
  else if(bidprice>lastlowestbid)
  {
    alert("bidding price must be less than lastlowestbiddingprice");
  }
else
{
  var userDetails={
    'bidprice':bidprice,
         'email':email,
         
         'siconnm':params.siconnm
  }
  axios.post(_apiurlbid+"save",userDetails).then((response)=>{
    
      setBidPrice("");
      alert("successfully product biden");
  })
}
}
  return (
    <>
      {/* about section */}

      <section class="service_section layout_padding">
        <div class="service_container">
          <div class="container ">
            
              <div class="heading_container">
                <h2>
                  Bid<span> Here and Earn Money</span>
                </h2>
<br/>         
<font color="Red"><h4><b>Lastlowestbid:Rs{lastlowestbid}</b></h4></font>

                <div id="category_main">
                  {
                     consignment.map((row)=>(
                      <> 
                      
                      <table class="table table-bordered">
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
                       <tr>
                        <td><b>User:{row.uid}</b></td>
                       </tr>
                       </table>
                       <br/><br/>
                       </>
                    
                      
                     ))
                     
                     
                  }
                 
                  


                </div>
                
                 <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="form_container">
            <span style={{"color":"dodgerblue"}}>{Output}</span>
            <form>
              <div>
                <label for="catnm">Bidding Price:</label>
                <input type="text" placeholder="" value={bidprice} onChange={e=>setBidPrice(e.target.value)} />
              </div>
            
              <br/>
              
              

              <div class="btn_box">
                <button type="button" onClick={handleSubmit}>
                  ADD BIDDING
                </button>
              </div>
           <br/><br/>
              <div id="category_main">
                  {
                     biddinguser.map((row)=>(
                      <> 
                      
                    <table class="table table-bordered">
                        <tr>
                          
                       <td><b>Biddibg Price:{row.bidprice}</b></td> 
                       </tr>
                       <tr>
                        <td>Email:{row.email}</td>
                       </tr> 
                       </table>
                     <br/><br/>
                       </>
                      
                      
                     ))
                     
                     }
                    </div>
            </form>
          </div>
        </div>
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

export default BidProduct;
