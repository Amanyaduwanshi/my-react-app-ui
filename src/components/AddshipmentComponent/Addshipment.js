import './Addshipment.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { _apiurlcategory,_apiurlshipment,_apiurlsubcategory } from '../../Api.url';


function Addshipment() {
  const navigate=useNavigate();
  const [ title , setTitle ] = useState(); 
  const [ catnm , setCategoryName ] = useState();
  const [ subcatnm , setSubCategoryName ] = useState();
  const [ description , setDescription ] = useState();
  const [ baseprice , setBasePrice ] = useState();
  const [file, setFile] = useState();
  const [ uid , setUserId ] = useState(localStorage.getItem('email'));
  const [ Output , setOutput ] = useState();
  const [ cDetails , setCategoryDetails ] = useState([]);
  const [ scDetails , setSubCategoryDetails ] = useState([]);

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  useEffect(()=>{
    axios.get(_apiurlcategory+"fetch").then((response)=>{
    setCategoryDetails(response.data);
    console.log(response.data);
    }).catch((error)=>{
    console.log(error);   
    })
  });

  const fetchSubCategory=(catnm)=>{
    axios.get(_apiurlsubcategory+"fetch?catnm="+catnm).then((response)=>{
      console.log(response.data)
      if(response.data.length!=0)
        setSubCategoryDetails(response.data);
      else
        setSubCategoryDetails([]);
       // console.log(".................."+scDetails);
    }).catch((error)=>{
      console.log(error);
    });
  };

 
  const handleSubCategory=(event)=>{
    setCategoryName(event.target.value);  
    fetchSubCategory(event.target.value);
  }
  const handleSubmit=(event)=>{
    var formData = new FormData();
    formData.append('title', title);
    formData.append('catnm', catnm);
    formData.append('subcatnm', subcatnm);
    formData.append('description', description);
    formData.append('baseprice', baseprice);
    formData.append('sicon', file);
    formData.append('uid',uid);

    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    }

    const config = {
        'content-type': 'multipart/form-data'
    };
  
    axios.post(_apiurlshipment+"save", formData, config).then((response) => {
     // alert("lll")

      setOutput("Shipment Added Successfully....");
      setTitle("");
      setCategoryName("");
      setSubCategoryName("");
      setDescription("");
      setBasePrice("");
      navigate("/addshipment");
    }).catch((err)=>{
      console.log(err); 
    });

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
             Add <span>Shipment Here</span>
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
                <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
              
              <div>
                 <select class="form-control" onChange={handleSubCategory} >
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
                 <select class="form-control" value={subcatnm} onChange={e=>setSubCategoryName(e.target.value)} >
                 <option>Select SubCategory</option>
                 {
                    scDetails.map((row)=>(
                   <option>{row.subcatnm}</option>  
                   ))
                }
                </select>
              </div>
              <br/>
              <div>
                <input type="text" placeholder="description" value={description} onChange={e=>setDescription(e.target.value)} />
              </div>
              <div>
                <input type="text" placeholder="baseprice"value={baseprice} onChange={e=>setBasePrice(e.target.value)}  />
              </div>
              <br/>
              <div>
                <label for="file">Shipment Pics</label>
                <input type="file" placeholder="pics" onChange={handleChange}  />
              </div>
              <br/>
              
              <br/>
  
              <div class="btn_box">
                <button type="button" onClick={handleSubmit}>
                  ADD CATEGORY
                </button>
              </div>
            </form>
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

export default Addshipment;
