import './Contact.css';
import { useState} from 'react';

function Contact() {
  const [userDetails,setUserDetails]=useState([{"uid":1001001,"name":"admin","email":"admin@gmail.com","password":"admin123"},{"uid":1001002,"name":"admin","email":"admin@gmail.com","password":"admin123"},{"uid":1001003,"name":"admin","email":"admin@gmail.com","password":"admin123"},{"uid":1001004,"name":"admin","email":"admin@gmail.com","password":"admin123"},{"uid":1001005,"name":"admin","email":"admin@gmail.com","password":"admin123"}])
  return (
    <>
    <div id="contentpart">
     
<h1>View & Manage User Details</h1>
<center>
<table border="1" cellspacing="10" cellpadding="10">
<tr>
<th>UserId</th>
<th>Username</th>
<th>UserEmail</th>
<th>Password</th>
</tr>
{
userDetails.map((row)=>(
<tr>
<td>{row.uid}</td>
<td>{row.name}</td>
<td>{row.email}</td>
<td>{row.password}</td>
</tr>
))
}
</table>
</center>
    </div>
    
    </>
     
  );
}

export default Contact;
