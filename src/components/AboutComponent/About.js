import './About.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function About() {
   const[pdetails,setDetails]=useState([]);

   useEffect(()=>{
      var apiurl="https://jsonplaceholder.typicode.com/posts"
      axios.get(apiurl).then((result)=>{
          //console.log(result.data)
          setDetails(result.data)
      }).catch((error)=>{
        console.log(error)
      });

   });
   
  return (
    <>
     {/* about section */}

  <section class="service_section layout_padding">
<div class="service_container">
  <div class="container ">
    <div class="heading_container">
          <h2>
            Welcome to Our <span>Shipping Store</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
       
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

export default About;
