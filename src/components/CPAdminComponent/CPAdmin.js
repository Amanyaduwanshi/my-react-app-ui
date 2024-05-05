import './CPAdmin.css';
 import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {
  const navigate=useNavigate();
  const[Output,setOutput]=useState();
  const[opassword,setOldPassword]=useState();
  const[npassword,setNewPassword]=useState();
  const[cnpassword,setConfirmNewPassword]=useState();
   
  const handleSubmit=()=>{
   axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
    if(npassword==cnpassword){
     let updateData={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};
     axios.patch(_apiurluser+"update",updateData).then((response)=>{
     alert("Password successfully changes,please login again..")
      navigate("/logout")
    })
    }
    else{
      setOutput("New & Confirm new password mismatch")
      setNewPassword("")
      setConfirmNewPassword("")
    }
   }).catch((error)=>{
     setOutput("Invalid old password")
     setOldPassword("")
    })
  }
  return (
    <>
     
      {/* about section */}
      <section class="contact_section layout_padding-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="heading_container">
            <h2>
            Change Password  <span> Here!..</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="form_container">
            <span style={{"color":"dodgerblue"}}>{Output}</span>
            <form>
              
              <div>
                <label for="oldpwd">Old Password:</label>
                <input type="password" placeholder="password"value={opassword} onChange={e=>setOldPassword(e.target.value)}  />
              </div>
              <br/>
              <div>
                <label for="newpwd">New Password:</label>
                <input type="password" placeholder="password"value={npassword} onChange={e=>setNewPassword(e.target.value)}  />
              </div>
              <br/>
              <div>
                <label for="cnpwd">Confirm Password:</label>
                <input type="password" placeholder="password"value={cnpassword} onChange={e=>setConfirmNewPassword(e.target.value)}  />
              </div>
              <br/>
              

              <div class="btn_box">
                <button type="button" onClick={handleSubmit}>
                  SEND
                </button>
              </div>
            </form>
          </div>
         </div>
         </div>
         </div>
        </section>
      
      {/* end about section */}
      


    </>

  );
}

export default CPAdmin;
