import React from 'react';
import { Grid, Button, AppBar, Toolbar, IconButton, Typography, TextField } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { useState } from 'react';

function Home({ setToken }) {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [place, setPlace] = useState("")
  const navigate = useNavigate();

  const AddUser = async () => {
    console.log("name", name);
    await fetch("http://localhost:8000/store", {
      method: 'POST',
      body: JSON.stringify({ name: name, age: age, place: place })
    })
      .then((res) => {
        console.log("success", res);
      }).catch((err) => {
        console.log("failed", err);
      })
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
              <Button color="inherit" onClick={() => { navigate("/userdetails"); }}
              >User Details</Button>
              <Button color="inherit" onClick={() => { navigate("/information"); }}
              >Information</Button>
              <Button color="inherit" onClick={() => { navigate("/status"); }}
              >Status</Button>
              <Button color="inherit" onClick={() => {
                localStorage.removeItem("token");
                setToken(false);
              }}>Logout</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <h2>Welcome to Home Page</h2>
        <Stack spacing={2} sx={{ paddingLeft: "1%" }}>
          <h3>Add User</h3>
          <TextField
            sx={{ width: "15%" }}
            variant="filled"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ width: "15%" }}
            variant='filled'
            label="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            sx={{ width: "15%" }}
            variant='filled'
            label='Place'
            onChange={(e) => setPlace(e.target.value)}
          />
          <Button
            sx={{ width: "15%" }}
            variant='contained'
            color="primary"
            onClick={AddUser} >Add</Button>
        </Stack>
      </Grid>
    </>
  )
}
export default Home;
