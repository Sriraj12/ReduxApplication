import React from 'react';
import { Button, AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';

function Userdetails() {
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <AccountCircleRoundedIcon />
                    </IconButton>
                    <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGIN APP
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" onClick={() => { navigate("/home"); }}
                        >Home</Button>
                        <Button color="inherit" onClick={() => {
                            navigate("/")
                            localStorage.removeItem("Token")
                        }}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <h2>Welcome to User Detail Page</h2>
        </>
    )
}
export default Userdetails;

function Information() {
    const navigate = useNavigate();
    return (
        <>
          <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <AccountCircleRoundedIcon />
                    </IconButton>
                    <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGIN APP
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" onClick={() => { navigate("/home"); }}
                        >Home</Button>
                        <Button color="inherit" onClick={() => {
                            navigate("/")
                            localStorage.removeItem("Token")
                        }}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <h2>Welcome to Information Page</h2>
        </>
    )
}
function Status() {
    const navigate = useNavigate();
    return (
        <>
         <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <AccountCircleRoundedIcon />
                    </IconButton>
                    <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGIN APP
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" onClick={() => { navigate("/home"); }}
                        >Home</Button>
                        <Button color="inherit" onClick={() => {
                            navigate("/")
                            localStorage.removeItem("Token")
                        }}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <h2>Welcome to Status Page</h2>
        </>
    )
}
export { Information, Status };