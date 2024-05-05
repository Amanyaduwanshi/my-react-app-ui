import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import {_apiurluser} from '../../Api.url'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const[Output,setOutput]=useState()
  
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password}//create object for api because api handle data in the form of object
    axios.post(_apiurluser+"login",userDetails).then((response)=>{
      setOutput("Login successfully");
      if(response.data.token!="error"){
        var obj=response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",obj._id);
        localStorage.setItem("name",obj.name);
        localStorage.setItem("email",obj.email);
        localStorage.setItem("mobile",obj.address);
        localStorage.setItem("address",obj.address);
        localStorage.setItem("city",obj.city);
        localStorage.setItem("gender",obj.gender);
        localStorage.setItem("role",obj.role);
        localStorage.setItem("status",obj.status);
        
        (obj.role=="admin")?navigate("/admin"):navigate("/user");

        //setOutput("Login success");
      }
       
    }).catch((error)=>{
      //console.log(error.response.data);
     if(error.response.data.token=="error")
     {
      setOutput("Invalid user Login failed,try gain");
      setEmail("");
      setPassword("");
     }
      
    });
}
  return (
    <>
    <section class="contact_section layout_padding-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="heading_container">
            <h2>
              <span>Login Here</span>
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
                <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              </div>
              <div>
                <input type="password" placeholder="password"value={password} onChange={e=>setPassword(e.target.value)}  />
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

export default Login;
