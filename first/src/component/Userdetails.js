import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Userdetails(){
    const navigate = useNavigate();
    return(
        <>
        <h2>Welcome to User Detail Page</h2>
        <Button variant="contained" align="right" color="primary" onClick={() => {navigate("/home");}}>Home</Button>
        </>
    )
}
export default Userdetails;

function Information(){
    const navigate = useNavigate();
    return(
        <>
        <h2>Welcome to Information Page</h2>
        <Button variant="contained" align="right" color="primary" onClick={() => {navigate("/home");}}>Home</Button>
        </>
    )
}
function Status(){
    const navigate = useNavigate();
    return(
        <>
        <h2>Welcome to Status Page</h2>
        <Button variant="contained" align="right" color="primary" onClick={() => {navigate("/home");}}>Home</Button>
        </>
    )
}
export {Information,Status};