import React, { useState, useEffect } from 'react';
import { Grid, Button, AppBar, Toolbar, IconButton, Typography, TextField } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Stack } from '@mui/system';



function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/store")
      .then((data) => data.json())
      .then(data => setData(data))
  }, [])

  const navigate = useNavigate();
  // const details = useSelector((state) => state)
  const handleSubmitClick = () => {
    return
  }
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [place, setPlace] = useState("")

const AddUser = async() =>{
  console.log("name",name);
  await fetch("http://localhost:8000/store",{
    method:'POST',
    body: JSON.stringify({name: name,age:age,place:place})
  })
  .then((res)=>{
    console.log("success",res);
  }).catch((err)=>{
    console.log("failed",err);
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
              <Button color="inherit" onClick={() => { navigate("/home/userdetails"); }}
              >User Details</Button>
              <Button color="inherit" onClick={() => { navigate("/home/information"); }}
              >Information</Button>
              <Button color="inherit" onClick={() => { navigate("/home/status"); }}
              >Status</Button>
              <Button color="inherit" onClick={() => {
                navigate("/")
                localStorage.removeItem("Token")
              }}>Logout</Button>
            </Stack>
          </Toolbar>
        </AppBar>
          <h2>Welcome to Home Page</h2>
          <Stack spacing={2}>
          <TextField 
            variant="filled"
            label="Name"
            onChange = {e=> setName(e.target.value)}
          />
          <TextField
           variant='filled'
           label="Age" 
           onChange ={e=> setAge(e.target.value)}
          />
          <TextField
           variant='filled'
           label='Place'
           onChange ={e=> setPlace(e.target.value)} 
          />
          <Button variant='contained'color="primary" onClick={AddUser} >Add</Button>
          </Stack>
          {/* <Button variant="contained" color="primary" onClick={handleSubmitClick}>Show User Details</Button> */}
          <br /><br />
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
export default Home;
