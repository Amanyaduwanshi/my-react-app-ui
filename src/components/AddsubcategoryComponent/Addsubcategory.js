import './Addsubcategory.css';
 import { useState, useEffect } from 'react';
 import axios from 'axios';
import { _apiurlcategory,_apiurlsubcategory } from '../../Api.url';

function Addsubcategory() {
  const[file,setFile]=useState();
  const[catName,setCatName]=useState();
  const[subcatName,setSubCatName]=useState();
  const[Output,setOutput]=useState();
  const[cDetails,setCategoryDetails]=useState([]);
   
  useEffect(()=>{
    axios.get(_apiurlcategory+"fetch").then((response)=>{
     console.log(response.data);
    setCategoryDetails(response.data);
    }).catch((error)=>{
    console.log(error);
    })
  })

  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  const handleSubmit=(event)=>{
    //event.preventDefault();
     var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm',subcatName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_apiurlsubcategory+"save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
    
  }
  return (
    <>
     
      {/* about section */}
      <div id='admin_section'>
      <section class="contact_section layout_padding-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-5 offset-md-1">
          <div class="heading_container">
            <h2>
              <span>ADD SUBCATEGORY HERE</span>
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
                <label for="catnm">Category Name:</label>
                <select class="form-control" placeholder="" value={catName} onChange={e=>setCatName(e.target.value)}>
                  <option>Select Category</option>
                  {
                    cDetails.map((row)=>(
                    <option>{row.catnm}</option>
                    ))
                  }
                </select>
              
              </div>
              <br/>
              <div>
                <label for="catnm">SubCategory Name:</label>
                <input type="text" placeholder="" value={subcatName} onChange={e=>setSubCatName(e.target.value)} />
              </div>
              <div>
              <label for="caticon">SubCategory Icon:</label>
                <input type="file" placeholder="" onChange={handleChange}  />
              </div>
              
              

              <div class="btn_box">
                <button type="button" onClick={handleSubmit}>
                  ADD SUBCATEGORY
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
      
    </section>
    
      </div>
      {/* end about section */}
      


    </>

  );
}


export default Addsubcategory;
