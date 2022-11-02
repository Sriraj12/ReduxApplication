import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Userdetails, { Information, Status } from "./component/Userdetails";
import Signup from './component/Signup';
import { Provider } from 'react-redux';
import store from './service/store';
import { useMemo, useState } from 'react';
import jwt_decode from 'jwt-decode';



function App(props) {
  const token = localStorage.getItem("token")
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const decoded = useMemo(() => {
    if (token && isLoggedIn) {
      return jwt_decode(token);
    }
  }, [isLoggedIn, token])
  const role = decoded?.role;

  return (
    <Provider store={store}>
      <>
        <Router>
          <Routes>
            {!isLoggedIn ?
              <>
                <Route exact path="/login" element={
                  <Login authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                <Route exact path="/login/signup" element={<Signup />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/userdetails" element={<Navigate replace to="/login" />} />
                <Route path="/information" element={<Navigate replace to="/login" />} />
                <Route path="/status" element={<Navigate replace to="/login" />} />
              </> :
              <>
                {
                  role === 'Super Admin' || role === 'Admin' ?
                    <>
                      <Route exact path="/userdetails" element={
                        <Userdetails authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                    </> :
                    <>
                      <Route path="/userdetails" element={<Navigate replace to="/" />} />
                    </>
                }
                <Route exact path="/" element={<Home authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                <Route exact path="/userdetails" element={
                  <Userdetails authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                <Route exact path="/information" element={
                  <Information authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                <Route exact path="/status" element={
                  <Status authToken={isLoggedIn} setToken={setIsLoggedIn} />} />
                <Route path="/login" element={<Navigate replace to="/" />} />
              </>
            }
          </Routes>
        </Router>
      </>
    </Provider>
  );
}

export default App;