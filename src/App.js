import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/HeaderComponent/Header.js';
import HeaderBottom from './components/HeaderBottomComponent/HeaderBottom.js';
import Slider from './components/SliderComponent/Slider.js';
import Content from './components/ContentComponent/Content.js';
import About from './components/AboutComponent/About.js';
import Contact from './components/ContactComponent/Contact.js';
import Service from "./components/ServiceComponent/Service.js";
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login.js';
import Logout from './components/LogoutComponent/Logout.js';
import Admin from './components/AdminComponent/Admin.js';
import ManageUsers from './components/ManageUsersComponent/ManageUsers.js';
import Addcategory from './components/AddcategoryComponent/Addcategory.js';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory.js';
import EPAdmin from './components/EPAdminComponent/EPAdmin.js';
import CPAdmin from './components/CPAdminComponent/CPAdmin.js';
import User from './components/UserComponent/User.js';
import Addshipment from './components/AddshipmentComponent/Addshipment.js';
import Searchshipment from './components/SearchshipmentsComponent/Searchshipment.js';
import SCshipment from './components/SCshipmentComponent/SCshipment.js';
import Shipmentlists from './components/ShipmentlistsComponent/Shipmentlist.js';
import BidProduct from './components/BidProductComponent/BidProduct.js';
import Sidebar from './components/SidebarComponent/Sidebar.js';
import Footer from './components/FooterComponent/Footer.js';
import LowerFooter from './components/LowerFooterComponent/LowerFooter.js';
import AdminHome from './components/AdminHomeComponent/AdminHome.js';



function App() {
  


  return (
    <>
    <div class="hero_area">
    <Header/>
    <HeaderBottom/>
    <Slider/>
  </div>
   

    <Routes>
    <Route path="/" element={< Content />} ></Route>
    <Route path="/About" element={<About />} ></Route>
    <Route path="/service" element={<Service />} ></Route>
    <Route path="/Contact" element={<Contact />} ></Route>
    <Route path="/Register" element={<Register />} ></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path="/Logout" element={<Logout />} ></Route>
    <Route path="/Admin" element={<Admin />} ></Route>
    <Route path="/adminhome" element={<AdminHome/>} ></Route>
    <Route path="/manageuser" element={<ManageUsers/>} ></Route>
    <Route path="/addcategory" element={<Addcategory/>} ></Route>
    <Route path="/addsubcategory" element={<Addsubcategory/>} ></Route>
    <Route path="/epadmin" element={<EPAdmin/>} ></Route>
    <Route path="/cpadmin" element={<CPAdmin/>} ></Route>
    <Route path="/User" element={<User />} ></Route>
    <Route path="/addshipment" element={<Addshipment/>} ></Route>
    <Route path="/searchshipment" element={<Searchshipment/>} ></Route>
    <Route path="/scshipment/:cnm" element={<SCshipment/>} ></Route>
    <Route path="/shipmentlist/:scnm" element={<Shipmentlists/>} ></Route>
    <Route path="/bidproduct/:siconnm" element={<BidProduct/>} ></Route>
    </Routes>

    <Footer/>  
    <LowerFooter/>
  </>    
      
  );
}

export default App;
