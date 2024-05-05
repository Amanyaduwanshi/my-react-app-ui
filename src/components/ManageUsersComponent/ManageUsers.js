import { useEffect, useState } from 'react';
import './ManageUsers.css';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import {useNavigate} from 'react-router-dom';

function ManageUsers() {
  const navigate= useNavigate();
    const [UserDetails,setUserDetails]=useState([]);
    
  useEffect(()=>{
    axios.get(_apiurluser+"fetch?role=user").then((response)=>{
     // console.log(response.data);
    setUserDetails(response.data);
    }).catch((error)=>{
    console.log(error);
    })
  })
 const manageUserStatus=(_id,status)=>{
//alert(_id+"----"+status);
if(status=="block"){
    let updateData={"condition_obj":{"_id":_id},"content_obj":{"status":0}}
    axios.patch(_apiurluser+"update",updateData).then((response)=>{
    navigate("/manageuser")
    })
}
else if(status=="verify"){
  let updateData={"condition_obj":{"_id":_id},"content_obj":{"status":1}}
  axios.patch(_apiurluser+"update",updateData).then((response)=>{
  navigate("/manageuser")
  })
}
else{
  let deleteData={"data":{"_id":_id}}
  axios.delete(_apiurluser+"delete",deleteData).then((response)=>{
  navigate("/manageuser")
  })
}
 };

  return (
    <>
     
      {/* about section */}
      <section class="service_section layout_padding">
      
        
      <div class="service_section ">
        
        
          <center>
          <div class="container ">
            <div class="heading_container">
              <h2>
                View and Manage <span>User Details</span>
              </h2>
              <center>
              <table class="table table-border" cellPadding="5">
                <tr>
                 <th>REgId</th> 
                 <th>Name</th> 
                 <th>Email</th> 
                 <th>Mobile</th> 
                 <th>Address</th> 
                 <th>City</th> 
                 <th>Gender</th> 
                 <th>Info</th> 
                 <th>Status</th>
                 <th>Action</th>
                </tr>
                {
                  UserDetails.map((row)=>(
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td> 
                      <td>{row.gender}</td>
                      <td>{row.info}</td>
                      <td>
                        {row.status==1 && <font color='green'>Verified</font> }
                        {row.status==0 && <font color='orange'>Not Verified</font> }
                      </td>
                      <td>
                     { row.status==1 && <font onClick={()=> manageUserStatus(row._id,'block')} color="blue">Change Status</font>}
                     { row.status==0 && <font onClick={()=> manageUserStatus(row._id,'verify')} color="blue">Change Status</font>}
                      <br/>
                      <font onClick={()=> manageUserStatus(row._id,'delete')} color="red">Delete</font>
                      </td>
                    </tr>
                  ))
                }
              </table>
              </center>
            </div>

          </div>
          </center>
        
      
      
      </div>
      </section>
      {/* end about section */}
      


    </>

  );
}

export default ManageUsers;
