import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
const maxLength = 1;

function Login({ setToken }) {
    const navigate = useNavigate();
    const [userError, setUserError] = useState();
    const [passError, setPassError] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState()

    const handleSubmit = async () => {

        if (username < maxLength) {
            setUserError('Please enter username')
        } else if (password < maxLength) {
            setPassError('Please enter the password')
        } else {
            console.log("bb2");
            try {
                const response = await axios.post('http://localhost:8000/login', { username, password })
                const { loggedInUser, token } = response.data;
                setData(loggedInUser);
                localStorage.setItem("token", token)
                setToken(true);
            }
            catch (err) {
                setUserError('Please enter valid username and password')
            }
            console.log("data", data);
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
                        helperText={userError}
                        fullWidth
                        value={username}
                        autoComplete='off'
                        onChange={(e) => setUsername(e.target.value)}
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
                        helperText={passError}
                        fullWidth
                        value={password}
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}
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
                        onClick={() => { navigate("/login/signup"); }}
                    >Sign Up</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Login;