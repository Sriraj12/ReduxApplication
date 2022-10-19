import React from 'react';
import {Paper,Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';



function Home() {
    const navigate = useNavigate();
    const details = useSelector((state)=> state)
    const handleSubmitClick = () =>{
       return details
    }
    console.log("Details",details.username,details);
    return(
    <>
    <Paper>
      <h2>Welcome to Home Page</h2>
      <div className='bmr'>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/userdetails");}}>User Details</Button>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/information");}}>Information</Button>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/status");}}>Status</Button>
      </div><br/><br/>
      <div>      
      <Button variant="contained" color="primary" onClick={handleSubmitClick}>Show User Details</Button>
      </div><br/><br/>
      <div>Name ={details.username}</div>
      <div>Password ={details.password}</div>
      <div>Color ={details.color}</div>
    </Paper>
    </>
    )
  }
  export default Home;
