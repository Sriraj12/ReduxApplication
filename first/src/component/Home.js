import React, {} from 'react';
import { Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Home() {

  const navigate = useNavigate();
  const details = useSelector((state) => state)
  const handleSubmitClick = () => {
    return details
  }
  return (
    <>
      <Paper>
        <h2>Welcome to Home Page</h2>
        <div className='bmr'>
          <Button variant="contained" color="secondary" onClick={() => { navigate("/home/userdetails"); }}>User Details</Button>
          <Button variant="contained" color="secondary" onClick={() => { navigate("/home/information"); }}>Information</Button>
          <Button variant="contained" color="secondary" onClick={() => { navigate("/home/status"); }}>Status</Button>
        </div><br /><br />
        <div>
          <Button variant="contained" color="primary" onClick={handleSubmitClick}>Show User Details</Button>
        </div><br /><br />
        {/* <div>
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
        </div> */}
        {/* <div>Name ={details.username}</div>
      <div>Password ={details.password}</div>
      <div>Color ={details.color}</div> */}
        <Button variant="outlined" color="warning" onClick={() => {
          navigate("/")
          localStorage.removeItem("Token")
        }}>Logout</Button>

      </Paper>
    </>
  )
}
export default Home;
