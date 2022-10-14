import React from 'react';
import {Paper,Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return <>
    <Paper>
      <h2>Welcome to Home Page</h2>
      <div >
        <div className='bmr'>
        <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => {navigate("/home/userdetails");}}
        >User Details</Button>
        </div>
        <div className='bmr'>
        <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => {navigate("/home/information");}}
        >Information</Button>
        </div>
        <div className='bmr'>
        <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => {navigate("/home/status");}}
        >Status</Button>
        </div>
      </div>
    </Paper>
    </>
  }
  export default Home;