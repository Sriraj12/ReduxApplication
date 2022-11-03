import React, { useEffect } from 'react';
import { Button, AppBar, IconButton, Toolbar, Typography, Grid } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';

function Userdetails({ setToken }) {
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios("http://localhost:8000/store", {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            })
            setData(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Grid>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <AccountCircleRoundedIcon />
                        </IconButton>
                        <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGIN APP
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button color="inherit" onClick={() => { navigate("/"); }}
                            >Home</Button>
                            <Button color="inherit" onClick={() => {
                                localStorage.removeItem("token")
                                setToken(false)
                            }}>Logout</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <h2>Welcome to User Detail Page</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(data?.map((value, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.place}</td>
                                    </tr>
                                )
                            }
                            )) ?? "loading..."}
                        </tbody>
                    </table>
                </div>
            </Grid>
        </>
    )
}
export default Userdetails;

function Information({ setToken }) {
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
                        <Button color="inherit" onClick={() => { navigate("/"); }}
                        >Home</Button>
                        <Button color="inherit" onClick={() => {
                            localStorage.removeItem("token")
                            setToken(false)
                        }}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <h2>Welcome to Information Page</h2>
        </>
    )
}
function Status({ setToken }) {
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
                        <Button color="inherit" onClick={() => { navigate("/"); }}
                        >Home</Button>
                        <Button color="inherit" onClick={() => {
                            localStorage.removeItem("token")
                            setToken(false)
                        }}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <h2>Welcome to Status Page</h2>
        </>
    )
}
export { Information, Status };