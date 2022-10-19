import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import { getPass } from '../service/action';


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    console.log("stateDate",data);
    const [uerror, setUerror] = useState();
    const [perror, setPerror] = useState()
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleSubmitClick = () => {
        if (user.username === "") {
            setUerror('Required Field')
        } else
            if (user.username.length < 6) {
                setUerror('Minimum 6 characters')
            }
            else
                if (user.password === "") {
                    setPerror('Required Field')
                } else
                    if (user.password.length < 6) {
                        setPerror('Minimum 6 characters');
                    }
                    else {
                        console.log("sign-in", user);
                        setUser(user)
                        navigate("/")
                        dispatch(getPass(user))
                    }
        console.log("sign.user", user.username);
        console.log("sign.pwd", user.password);
    };
    return (
        <Grid>
            <Paper elevation={10} className="user">
                <Grid align="center">
                    <Avatar><PersonIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <div className="name">
                    <TextField
                        required
                        id="outlined"
                        variant="filled"
                        label="Enter Username"
                        className="username"
                        placeholder='Enter your name'
                        fullWidth
                        value={user.username}
                        autoComplete='off'
                        onChange={(e) => setUser(prev => ({ ...prev, username: e.target.value }))}
                        helperText={uerror}
                        error={uerror}
                    />
                </div>
                <div className="pass">
                    <TextField
                        required
                        id="outlined-password-input"
                        variant="filled"
                        label="Enter Password"
                        type="password"
                        className="password"
                        placeholder='Enter your password'
                        fullWidth
                        value={user.password}
                        autoComplete='off'
                        onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
                        helperText={perror}
                        error={perror}
                    />
                </div>
                <div className="button1">
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmitClick}
                    >Submit</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Signup;



// dispatch({
//     type: VALUE,
//     payload: user
// })