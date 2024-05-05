import './Addcategory.css';
 import { useState, useEffect } from 'react';
 import axios from 'axios';
import { _apiurlcategory } from '../../Api.url';

function Addcategory() {
  const[file,setFile]=useState();
  const[catName,setCatName]=useState();
  const[Output,setOutput]=useState();
  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  const handleSubmit=(event)=>{
    //event.preventDefault();
     var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_apiurlcategory+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
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
              <span>ADD CATEGORY HERE</span>
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
                <input type="text" placeholder="" value={catName} onChange={e=>setCatName(e.target.value)} />
              </div>
              <div>
              <label for="caticon">Category Icon:</label>
                <input type="file" placeholder="" onChange={handleChange}  />
              </div>
              
              

              <div class="btn_box">
                <button type="button" onClick={handleSubmit}>
                  ADD CATEGORY
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

export default Addcategory;
