import './EPAdmin.css';
 import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Api.url';


function EPAdmin() {
  
     
     const[Output,setOutput]=useState()
     const[name,setName]=useState()
     const[email,setEmail]=useState()
     const[mobile,setMobile]=useState()
     const[address,setAddress]=useState()
     const[city,setCity]=useState()
     const[gender,setGender]=useState()
  useEffect(()=>{
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
     // console.log(response.data);
    
    setName(response.data[0].name); 
    setEmail(response.data[0].email); 
    setMobile(response.data[0].mobile); 
    setAddress(response.data[0].address); 
    setCity(response.data[0].city); 
      
  }).catch((error)=>{
    console.log(error);
    })
  },[])
  const handleSubmit=()=>{
    var updateData={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(_apiurluser+"update",updateData).then((response)=>{
    alert("Profile edited successfully changes..")
     
   })
  };
  return (
    <>
       <section class="contact_section layout_padding-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="heading_container">
            <h2>
             Edit <span>Profile Here</span>
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
                <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} />
                </div>
              <div>
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              </div>
              
              <div>
                <input type="text" placeholder="Phone Number"value={mobile} onChange={e=>setMobile(e.target.value)}  />
              </div>
              <div>
                <input type="text" class="message-box" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)} />
              </div>
              <div>
                 <select class="form-control"value={city} onChange={e=>setCity(e.target.value)} >
                  <option>Select Option</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Ujjain</option>
                </select>
              </div>
              <br/>
              <div class='gendercheck'>
                <label for="gender">Gender:</label>
                <br/>
                Male:<input checked type="radio" placeholder="gender" value="Male" onChange={e=>setGender(e.target.value)} name='gender'/>
              
                FeMale:<input type="radio" placeholder="gender" value="Female" onChange={e=>setGender(e.target.value)} name='gender' />
              
              </div>

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
      
      


    </>

  );
}

export default EPAdmin;
