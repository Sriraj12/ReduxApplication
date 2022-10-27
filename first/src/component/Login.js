import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSelector } from 'react-redux';


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/userdetails")
            .then((data) => data.json())
            .then(data => setData(data))
    }, [])
    const [token, setToken] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/data")
        .then((token) => token.json())
        .then(token => setToken(token))
    }, [])
    console.log("sdfsdd",token);
    const checkuser = useSelector((state) => state.username)
    const checkpass = useSelector((state) => state.password)
    localStorage.setItem("Token", "ticket")

    console.log("checkuser", checkuser, "checkpass", checkpass);
    const [check, setCheck] = useState()
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    console.log("log.user", user.username);
    console.log("log.pwd", user.password);
    console.log("value", user);
    console.log("errorState", check);
    const array1 = data.filter((value)=>
        (value.username === user.username && value.password === user.password)
    );
    const handleSubmit = () => {
        console.log("bksbks");
        if (user.username === "" && user.password === "") {
            setCheck(alert('Please enter username and password'))
        }
        else
            if (array1.length === 1) {
                console.log("bb2");
                console.log("bb3");
                setTimeout(() => {
                    navigate("/home")
                }, 1000)

            }
            else {
                setCheck(alert('Please enter valid username and password'))
            }
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
                        value={user.username}
                        autoComplete='off'
                        onChange={(e) => setUser(prev => ({ ...prev, username: e.target.value }))}
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
                        onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
                    />
                </div>
                <div className="button1">
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Sign In</Button>
                </div>
                {/* <div>
                    <Typography>
                        Don't have an account <Link
                        onClick ={() => {navigate("/signup");}}
                        ></Link>
                    </Typography>
                </div> */}
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