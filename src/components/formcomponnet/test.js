import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import {_apiurluser} from '../../Api.url';

function Register() {

  // Reset button.....
  const resetData = () => 
  { 
       setOutput("");              
       setNameError("");
       setName("");
       setEmail("");
       setPassword("");
       setAddress("");
       setCity("");
       setNote("");
       setMobile("");
  }

  const[Output,setOutput]=useState('')
  const[name,setName]=useState('')
  const[nameError,setNameError]=useState('');
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[mobile,setMobile]=useState('')
  const[address,setAddress]=useState('')
  const[city,setCity]=useState('')
  const[gender,setGender]=useState()
  const[note,setNote]=useState('');


  //form validation function...
 
  const handleSubmit=()=>{
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}//create object for api because api handle data in the form of object
    axios.post(_apiurluser+"save",userDetails).then((response)=>{
      setOutput("User Registration successfully");
       setName("");
       setEmail("");
       setPassword("");
       setMobile("");
       setAddress("");
       setCity("");
       setGender("");
    }).catch((error)=>{
      setOutput("User Registration failed!");
    });
}

  return (
    <>
    
     <h1> welcome</h1>
     <section class="contact_section layout_padding-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="heading_container">
            <h2>
              <span>Register Here</span>
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
                <input type="password" placeholder="password"value={password} onChange={e=>setPassword(e.target.value)}  />
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
                Male:<input type="radio" placeholder="gender" value="Male" onChange={e=>setGender(e.target.value)} name='gender'/>
              
                FeMale:<input type="radio" placeholder="gender" value="Female" onChange={e=>setGender(e.target.value)} name='gender' />
              
              </div>
              
              <div class="btn_box">
                <button type="button" onClick=/*{formValidation}*/{handleSubmit}>
                  SEND
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="reset" onClick={resetData}>
                  RESET
                </button>
                
              </div>
              <br/>
              
            </form>
          </div>
        </div>
        </div>
        </div>
    </section>
    </>
     
  );
}

export default Register;
