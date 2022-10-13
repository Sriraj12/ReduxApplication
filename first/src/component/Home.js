import React from 'react';
import {Paper,Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return <>
    <Paper>
      <h2>Welcome to Home Page</h2>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/userdetails");}}>User Details</Button>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/information");}}>Information</Button>
      <Button variant="contained" color="secondary" onClick={() => {navigate("/home/status");}}>Status</Button>
    </Paper>
    </>
  }
  export default Home;