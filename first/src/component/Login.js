import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSelector } from 'react-redux';
// import { signup } from '../service/action'; 



function Login () {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const checkuser = useSelector((state) => state.username)
    const checkpass = useSelector((state) => state.password)

    const [check,setCheck] = useState()
    const [user,setUser] = useState({
        username:"",
        password:"",
        nationality:""
    });
    console.log("popo",user.username);
    console.log("po",user.password);
    console.log("value",user);
    console.log("digit",check);
    const handleSubmit =()=>{
        if(user.username === "" && user.password === ""){
            setCheck(alert('Please enter username and password'))
        }
        else
        if(user.username === checkuser && user.password === checkpass){
           setCheck(()=>{navigate("/home")})
        }
        else{
            setCheck(alert('Please enter valid username and password'))
        }
    }
    useEffect(()=>{
        localStorage.setItem("userDetails",JSON.stringify(user))
        localStorage.getItem("userDetails",user)
      });
    return (
        <Grid>
            <Paper elevation={10} className="user">
                <Grid align="center">
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <div className="name">
                    <TextField
                        required
                        id="outlined"
                        label="Username"
                        className="username"
                        placeholder='Enter user name'
                        fullWidth
                        value={user.username}
                        autoComplete='off'
                        onChange={(e) => setUser(prev=>({...prev,username: e.target.value}))}
                    />
                </div>
                <div className="pass">
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        className="password"
                        placeholder='Enter password'
                        fullWidth
                        value={user.password}
                        autoComplete='off'
                        onChange={(e) => setUser(prev=>({...prev, password: e.target.value}))}
                    />
                </div>
                <div className="button1">
                <Button 
                variant="contained" 
                fullWidth 
                onClick = {handleSubmit}
                >
                Sign In</Button>
                </div>
                <div>
                    <Button
                    variant ="contained"
                    fullWidth
                    color="inherit"
                    onClick ={() => {navigate("/signup");}} 
                    >Sign Up</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Login;


// ()=>{navigate("/home")}
// () => dispatch(Action())
// () => dispatch(signup())

