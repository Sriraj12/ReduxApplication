import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
// import { useDispatch ,useSelector } from 'react-redux';


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/userdetails")
            .then((data) => data.json())
            .then(data => setData(data))
    }, [])

    

    // const checkuser = useSelector((state) => state.username)
    // const checkpass = useSelector((state) => state.password)
    // localStorage.setItem("Token", "ticket")

    // console.log("checkuser", checkuser, "checkpass", checkpass);
    const [check, setCheck] = useState()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // console.log("log.user",username);
    // console.log("log.pwd",password);
    console.log("errorState", check);
    const array1 = data.filter((value)=>
        (value.username === username && value.password === password)
    );
    const handleSubmit =() => {

        const tokens = axios.post('http://localhost:8000/token',{username,password})
        .then(response =>{
            const token = response.data.token;
            localStorage.setItem("token",token)

            setAuthToken(token);
            console.log(tokens);
        })
        .catch(err => console.log(err));

        if (username === "" && password === "") {
            setCheck(alert('Please enter username and password'))
        }
        else
            if (array1.length === 1) {
                console.log("bb2");
                setTimeout(() => {
                    navigate("/home")
                }, 1000)
                console.log("bb3");

            }
            else {
                setCheck(alert('Please enter valid username and password'))
            }
    }
    const setAuthToken = (token) =>{
        if(token){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        else{
            delete axios.defaults.headers.common["Authorization"];
        }
    }

    const token = localStorage.getItem("token");
    if(token){
        setAuthToken(token);
    }

    return (
        <Grid className='bgcolor'>
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
                        value={username}
                        autoComplete='off'
                        onChange={(e) => setUsername(e.target.value )}
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
                        value={password}
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value )}
                    />
                </div>
                <div className="button1">
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                    >Sign In</Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        fullWidth
                        color="inherit"
                        onClick={() => { navigate("/signup"); }}
                    >Sign Up</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Login;